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
  fecha: Date;
  hora: string;
}