export interface Camiones {
  patente: string;
  marca: string;
  modelo: string;
  anno: string;
  id: string;
}

export interface Recolectores {
  run: string;
  nombre: string;
  direccion: string;
  telefono: string;
  camionDesignado: string;
  nombreUsuario: string;
  password: string;
  rol: string;
  id: string;
}

export interface Cliente {
  run: string;
  nombre: string;
  direccion: string;
  telefono: string;
  usuario: string;
  contrasena: string;
  tipoplan: any;
  rol: string;
  id: string;
}

export interface Rutas {
  camionAsignado: string;
  recolectorAsignado: string;
  clienteAsignado: string;
  direccion: string;
  fecha: any;
  hora: string;
  id: string;
}

export interface Evidencias {
  foto: any;
  comentario: string;
  id: string;
  clienteAsignado: string;
  recolectorAsignado: string;
}

export interface Usuario {
  uid: string;
  email: string;
  password: string;
  nombreUsuario: string;
}
