import { Document } from "mongoose";


export interface Cliente extends Document {
    readonly IDcliente: number;
    readonly Contraseña: string;
    readonly DNI: number;
    readonly Nombre: string;
    readonly apellido: string;
    readonly direccion: string
}

export class Administrador extends Document {
    readonly IDadmin: number;
    readonly Contraseña: string;
    readonly DNI: number;
    readonly Nombre: string;
    readonly apellido: string;
    readonly direccion: string;
    readonly genero: string;
    readonly correo: string
}

export class Libro extends Document {
    readonly Codigolibro: number;
    readonly Titulo: string;
    readonly Autor: string;
    readonly Genero: string;
    readonly Editorial: string;
    readonly Precio: number;
    readonly Numeropaginas: number;
    readonly Fechapublicacion: Date;
    readonly ISSN: number;
    readonly Idioma: string;
    readonly Añopublicacion: Date;
    readonly Estado: string
}
