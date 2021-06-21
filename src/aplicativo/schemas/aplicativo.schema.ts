import { Schema } from "mongoose";

export const ClienteSchema = new Schema({
    IDcliente: {type: Number, required: true},
    Password: {type: String, required: true},
    DNI: Number,
    Nombre: String,
    apellido: String,
    direccion: String

});

export const AdministradorSchema = new Schema({
    IDadmin: {type: Number, required: true},
    Contraseña: {type: String, required: true},
    DNI: Number,
    Nombre: String,
    apellido: String,
    direccion: String,
    genero: String,
    correo: String
});

export const LibroSchema = new Schema({
    Codigolibro: {type: Number, required: true},
    Titulo: {type: String, required: true},
    Autor: {type: String, required: true},
    Genero: {type: String, required: true},
    Editorial: String,
    Precio: Number,
    Numeropaginas: Number,
    Fechapublicacion: String,
    ISSN: Number,
    Idioma: String,
    Añopublicacion: Number,
    Estado: {type: String, required: true}
})