export interface Camiones {
  patente: string;
  marca: string;
  modelo: string;
  anno: string;
  id: string;
}

export interface Rutas {
  camionAsignado: string;
  recolectorAsignado: string;
  clienteAsignado: string;
  direccion: string;
  comuna: string;
  fecha: any;
  hora: string;
  id: string;
}

export interface Evidencias {
  foto: string;
  comentario: string;
  id: string;
  clienteAsignado: string;
  recolectorAsignado: string;
}

export interface Usuario {
  uid: string;
  email: string;
  password: string;
  run: string,
  nombreUsuario: string;
  tipoUsuario: string;
  direccion: string;
  prefijo: string;
  telefono: string;
  comuna: string;
  tipoPlan: any;
  camionDesignado: any;
}
