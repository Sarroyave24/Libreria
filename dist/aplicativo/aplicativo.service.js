"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicativoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const aplicativo_dto_1 = require("./dto/aplicativo.dto");
let AplicativoService = class AplicativoService {
    constructor(clienteModel, administradorModel, libroModel) {
        this.clienteModel = clienteModel;
        this.administradorModel = administradorModel;
        this.libroModel = libroModel;
    }
    async getObtenerclientes() {
        const clientes = await this.clienteModel.find();
        return clientes;
    }
    async getMostrarCliente(IDcliente) {
        const cliente = await this.clienteModel.findById(IDcliente);
        return cliente;
    }
    async createCliente(ClienteDTO) {
        const createcliente = new this.clienteModel(ClienteDTO);
        return await createcliente.save();
    }
    async updateCliente(IDcliente, ClienteDTO) {
        const updatecliente = await this.clienteModel.findByIdAndUpdate(IDcliente, ClienteDTO, { new: true });
        return updatecliente;
    }
    async deleteCliente(IDcliente) {
        const deletecliente = await this.clienteModel.findByIdAndDelete(IDcliente);
        return deletecliente;
    }
    async createAdministrador(AdministradorDTO) {
        const createadministrador = new this.administradorModel(AdministradorDTO);
        return await createadministrador.save();
    }
    async deleteAdministrador(IDadmin) {
        const deleteadministrador = await this.administradorModel.findByIdAndDelete(IDadmin);
        return deleteadministrador;
    }
    async createLibro(LibroDTO) {
        const createlibro = new this.libroModel(LibroDTO);
        return await createlibro.save();
    }
    async updateLibro(Codigolibro, libroDTO) {
        const updatelibro = await this.libroModel.findByIdAndUpdate(Codigolibro, aplicativo_dto_1.LibroDTO, { new: true });
        return updatelibro;
    }
    async deleteLibro(Codigolibro) {
        const deletelibro = await this.libroModel.findByIdAndDelete(Codigolibro);
        return deletelibro;
    }
    async getMostrarLibros() {
        const mostrarlibros = await this.libroModel.find();
        return mostrarlibros;
    }
};
AplicativoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Cliente')),
    __param(1, mongoose_2.InjectModel('Administrador')),
    __param(2, mongoose_2.InjectModel('Libro')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], AplicativoService);
exports.AplicativoService = AplicativoService;
//# sourceMappingURL=aplicativo.service.js.map