"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroSchema = exports.AdministradorSchema = exports.ClienteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ClienteSchema = new mongoose_1.Schema({
    IDcliente: { type: Number, required: true },
    Contraseña: { type: String, required: true },
    DNI: Number,
    Nombre: String,
    apellido: String,
    direccion: String
});
exports.AdministradorSchema = new mongoose_1.Schema({
    IDadmin: { type: Number, required: true },
    Contraseña: { type: String, required: true },
    DNI: Number,
    Nombre: String,
    apellido: String,
    direccion: String,
    genero: String,
    correo: String
});
exports.LibroSchema = new mongoose_1.Schema({
    Codigolibro: { type: Number, required: true },
    Titulo: { type: String, required: true },
    Autor: { type: String, required: true },
    Genero: { type: String, required: true },
    Editorial: String,
    Precio: Number,
    Numeropaginas: Number,
    Fechapublicacion: Date,
    ISSN: Number,
    Idioma: String,
    Añopublicacion: Date,
    Estado: { type: String, required: true }
});
//# sourceMappingURL=aplicativo.schema.js.map