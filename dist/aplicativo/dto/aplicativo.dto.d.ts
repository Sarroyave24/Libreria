export declare class ClienteDTO {
    readonly IDcliente: number;
    readonly Password: string;
    readonly DNI: number;
    readonly Nombre: string;
    readonly apellido: string;
    readonly direccion: string;
    readonly genero: string;
    readonly preferencias: string;
    readonly correo: string;
}
export declare class AdministradorDTO {
    readonly IDadmin: number;
    readonly Contraseña: string;
    readonly DNI: number;
    readonly Nombre: string;
    readonly apellido: string;
    readonly direccion: string;
    readonly genero: string;
    readonly correo: string;
}
export declare class LibroDTO {
    readonly Codigolibro: number;
    readonly Titulo: string;
    readonly Autor: string;
    readonly Genero: string;
    readonly Editorial: string;
    readonly Precio: string;
    readonly Numeropaginas: number;
    readonly Fechapublicacion: string;
    readonly ISSN: number;
    readonly Idioma: string;
    readonly Añopublicacion: number;
    readonly Estado: string;
}
