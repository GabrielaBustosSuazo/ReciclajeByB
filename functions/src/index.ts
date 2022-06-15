import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const cors = require("cors")({
  origin: true,
});

const sendNotification = (notification: INotification) => {
  return new Promise((resolve) => {
    const message: admin.messaging.MulticastMessage = {
      data: notification.data,
      tokens: notification.tokens,
      notification: notification.notification,
      android: {
        notification: {
          icon: "../../../assets/img/LogoPequennopng.png",
          color: "#EB9234",
        },
      },
      apns: {
        payload: {
          aps: {
            sound: {
              critical: true,
              name: "default",
              volume: 1,
            },
          },
        },
      },
    };

    console.log("List of tokens send", notification.tokens);

    admin
        .messaging()
        .sendMulticast(message)
        .then((response) => {
          if (response.failureCount > 0) {
            const failedTokens: any[] = [];
            response.responses.forEach((resp, idx) => {
              if (!resp.success) {
                failedTokens.push(notification.tokens[idx]);
              }
            });
            console.log("List of tokens that caused failures: " + failedTokens);
          // elimnar tokens
          } else {
            console.log("Send notification exitoso -> ");
          }
          resolve(true);
          return;
        })
        .catch((error) => {
          console.log("Send fcm falló -> ", error);
          resolve(false);
          return;
        });
  });
};

export const newNotification = functions.https.onRequest(
    (request, response) => {
      return cors(request, response, async () => {
        if (request.body.data) {
          const notification = request.body.data as INotification;
          await sendNotification(notification);
          const res: Res = {
            respuesta: "success",
          };
          response.status(200).send(res);
        } else {
          const res = {
            respuesta: "error",
          };
          response.status(200).send(res);
        }
      });
    }
);

interface Res {
  respuesta: string;
}

interface INotification {
  data: any;
  tokens: string[];
  notification: admin.messaging.Notification;
}