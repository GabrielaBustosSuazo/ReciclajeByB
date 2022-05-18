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
  rol: string;
  id: string;
}

export interface Cliente {
  run: string;
  nombre: string;
  direccion: string;
  telefono: string;
  tipoplan: any;
  rol: string;
  comuna: string;
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
  nombreUsuario: string;
}
