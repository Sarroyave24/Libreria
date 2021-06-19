export class ClienteDTO{
    readonly IDcliente: number;
    readonly Contraseña: string;
    readonly DNI: number;
    readonly Nombre: string;
    readonly apellido: string;
    readonly direccion: string;
    readonly genero: string;
    readonly preferencias: string;
    readonly correo: string
}

export class AdministradorDTO{
    readonly IDadmin: number;
    readonly Contraseña: string;
    readonly DNI: number;
    readonly Nombre: string;
    readonly apellido: string;
    readonly direccion: string;
    readonly genero: string;
    readonly correo: string
}

export class LibroDTO{
    readonly Codigolibro: number;
    readonly Titulo: string;
    readonly Autor: string;
    readonly Genero: string;
    readonly Editorial: string;
    readonly Precio: string;
    readonly Numeropaginas: number;
    readonly Fechapublicacion: Date;
    readonly ISSN: number;
    readonly Idioma: string;
    readonly Añopublicacion: Date;
    readonly Estado: string
}

