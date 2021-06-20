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
exports.AplicativoController = void 0;
const common_1 = require("@nestjs/common");
const aplicativo_dto_1 = require("./dto/aplicativo.dto");
const aplicativo_dto_2 = require("./dto/aplicativo.dto");
const aplicativo_dto_3 = require("./dto/aplicativo.dto");
const aplicativo_service_1 = require("./aplicativo.service");
let AplicativoController = class AplicativoController {
    constructor(aplicativoservice) {
        this.aplicativoservice = aplicativoservice;
    }
    async crearPost(res, ClienteDTO) {
        const cliente = await this.aplicativoservice.createCliente(ClienteDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'cliente creado',
            cliente: cliente
        });
    }
    async getObtenerclientes(res) {
        const clientes = await this.aplicativoservice.getObtenerclientes();
        return res.status(common_1.HttpStatus.OK).json({
            cliente: clientes
        });
    }
    async getMostrarCliente(res, IDcliente) {
        const cliente = await this.aplicativoservice.getMostrarCliente(IDcliente);
        if (!cliente)
            throw new common_1.NotFoundException('no se ha encontrado al cliente');
        return res.status(common_1.HttpStatus.OK).json(cliente);
    }
    async deleteCliente(res, IDcliente) {
        const clienteEliminado = await this.aplicativoservice.deleteCliente(IDcliente);
        if (!clienteEliminado)
            throw new common_1.NotFoundException('no se ha encontrado al cliente');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'cliente eliminado',
            clienteEliminado
        });
    }
    async updateCliente(res, ClienteDTO, IDcliente) {
        const clienteEditado = await this.aplicativoservice.updateCliente(IDcliente, ClienteDTO);
        if (!clienteEditado)
            throw new common_1.NotFoundException('no se ha encontrado al cliente');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'cliente editado',
            clienteEditado
        });
    }
    async createAdministrador(res, AdministradorDTO) {
        const administradorcreado = await this.aplicativoservice.createAdministrador(AdministradorDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'administrador creado',
            administradorcreado: administradorcreado
        });
    }
    async deleteAdministrador(res, IDadmin) {
        const administradoreliminado = await this.aplicativoservice.deleteAdministrador(IDadmin);
        if (!administradoreliminado)
            throw new common_1.NotFoundException('no se ha encontrado al administrador');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'administrador eliminado',
            administradoreliminado
        });
    }
    async createLibro(res, LibroDTO) {
        const libroagregado = await this.aplicativoservice.createLibro(LibroDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'libro agregado',
            libroagregado: libroagregado
        });
    }
    async updateLibro(res, LibroDTO, Codigolibro) {
        const libroeditado = await this.aplicativoservice.updateLibro(Codigolibro, LibroDTO);
        if (!libroeditado)
            throw new common_1.NotFoundException('no se ha encontrado el libro');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'libro editado',
            libroeditado
        });
    }
    deleteLibro(res, Codigolibro) {
        const libroeliminado = this.aplicativoservice.deleteLibro(Codigolibro);
        if (!libroeliminado)
            throw new common_1.NotFoundException('no se ha encontrado el libro');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'libro eliminado',
            libroeliminado
        });
    }
    async getMostrarLibros(res) {
        const mostrarlibros = await this.aplicativoservice.getMostrarLibros();
        return res.status(common_1.HttpStatus.OK).json({
            mostrarlibros
        });
    }
};
__decorate([
    common_1.Post('/agregarcliente'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aplicativo_dto_1.ClienteDTO]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "crearPost", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "getObtenerclientes", null);
__decorate([
    common_1.Get('/:IDcliente'),
    __param(0, common_1.Res()), __param(1, common_1.Param('IDcliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "getMostrarCliente", null);
__decorate([
    common_1.Delete('/eliminarcliente'),
    __param(0, common_1.Res()), __param(1, common_1.Query('IDcliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "deleteCliente", null);
__decorate([
    common_1.Put('/editarcliente'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Query('IDcliente')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aplicativo_dto_1.ClienteDTO, Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "updateCliente", null);
__decorate([
    common_1.Post('/agregarAdministrador'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aplicativo_dto_2.AdministradorDTO]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "createAdministrador", null);
__decorate([
    common_1.Delete('/eliminaradministrador'),
    __param(0, common_1.Res()), __param(1, common_1.Query('IDadmin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "deleteAdministrador", null);
__decorate([
    common_1.Post('/agregarlibro'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aplicativo_dto_3.LibroDTO]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "createLibro", null);
__decorate([
    common_1.Put('/editarlibro'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Query('Codigolibro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, aplicativo_dto_3.LibroDTO, Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "updateLibro", null);
__decorate([
    common_1.Delete('/eliminarlibro'),
    __param(0, common_1.Res()), __param(1, common_1.Query('Codigolibro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AplicativoController.prototype, "deleteLibro", null);
__decorate([
    common_1.Get('/mostrarlibros'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AplicativoController.prototype, "getMostrarLibros", null);
AplicativoController = __decorate([
    common_1.Controller('aplicativo'),
    __metadata("design:paramtypes", [aplicativo_service_1.AplicativoService])
], AplicativoController);
exports.AplicativoController = AplicativoController;
//# sourceMappingURL=aplicativo.controller.js.map