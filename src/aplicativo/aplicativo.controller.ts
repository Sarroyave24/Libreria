import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { ClienteDTO } from "./dto/aplicativo.dto";
import { AdministradorDTO } from "./dto/aplicativo.dto";
import { LibroDTO } from "./dto/aplicativo.dto";

import { AplicativoService } from "./aplicativo.service";
import { RSA_NO_PADDING } from 'constants';

@Controller('aplicativo')
export class AplicativoController {

    constructor(private aplicativoservice: AplicativoService) {}

    @Post('/agregarcliente')
    async crearPost(@Res() res, @Body() ClienteDTO: ClienteDTO){

        const cliente = await this.aplicativoservice.createCliente(ClienteDTO);
        return res.status(HttpStatus.OK).json({
            message: 'cliente creado',
            cliente: cliente
        });

    }

    @Get('/')
    async getObtenerclientes(@Res() res) {
        const clientes = await this.aplicativoservice.getObtenerclientes();
        return res.status(HttpStatus.OK).json({
            cliente: clientes
        });
    }


    @Get('/:IDcliente')
    async getMostrarCliente(@Res() res, @Param('IDcliente') IDcliente) {
        const cliente = await this.aplicativoservice.getMostrarCliente(IDcliente);
        if(!cliente) throw new NotFoundException('no se ha encontrado al cliente');
        return res.status(HttpStatus.OK).json(cliente);
    }

    @Delete('/eliminarcliente')
    async deleteCliente(@Res() res, @Query('IDcliente') IDcliente) {
        const clienteEliminado = await this.aplicativoservice.deleteCliente(IDcliente);
        if(!clienteEliminado) throw new NotFoundException('no se ha encontrado al cliente');
        return res.status(HttpStatus.OK).json({
            message: 'cliente eliminado',
            clienteEliminado
        });

    }

    @Put('/editarcliente')
    async updateCliente(@Res() res, @Body() ClienteDTO: ClienteDTO, @Query('IDcliente') IDcliente){
        const clienteEditado = await this.aplicativoservice.updateCliente(IDcliente, ClienteDTO)
        if(!clienteEditado) throw new NotFoundException('no se ha encontrado al cliente');
        return res.status(HttpStatus.OK).json({
            message: 'cliente editado',
            clienteEditado
        })
    }

    //Administrador//

    @Post('/agregarAdministrador')
    async createAdministrador(@Res() res, @Body() AdministradorDTO: AdministradorDTO){
        const administradorcreado = await this.aplicativoservice.createAdministrador(AdministradorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'administrador creado', 
            administradorcreado: administradorcreado
        })
    }

    @Delete('/eliminaradministrador')
    async deleteAdministrador(@Res() res, @Query('IDadmin') IDadmin) {
        const administradoreliminado = await this.aplicativoservice.deleteAdministrador(IDadmin);
        if (!administradoreliminado) throw new NotFoundException('no se ha encontrado al administrador');
        return res.status(HttpStatus.OK).json({
            message: 'administrador eliminado',
            administradoreliminado
        })
    }

    //Libro//

    @Post('/agregarlibro')
    async createLibro(@Res() res, @Body() LibroDTO: LibroDTO){
        const libroagregado = await this.aplicativoservice.createLibro(LibroDTO);
        return res.status(HttpStatus.OK).json({
            message: 'libro agregado',
            libroagregado: libroagregado
        })
    }

    @Put('/editarlibro')
    async updateLibro(@Res() res, @Body() LibroDTO: LibroDTO, @Query('Codigolibro') Codigolibro){
        const libroeditado = await this.aplicativoservice.updateLibro(Codigolibro, LibroDTO);
        if(!libroeditado) throw new NotFoundException ('no se ha encontrado el libro');
        return res.status(HttpStatus.OK).json({
            message: 'libro editado',
            libroeditado
        })
    }

    @Delete('/eliminarlibro')
    deleteLibro(@Res() res, @Query('Codigolibro') Codigolibro){
        const libroeliminado = this.aplicativoservice.deleteLibro(Codigolibro);
        if(!libroeliminado) throw new NotFoundException ('no se ha encontrado el libro');
        return res.status(HttpStatus.OK).json({
            message: 'libro eliminado',
            libroeliminado
        })
    }

    @Get('/mostrarlibros')
    async getMostrarLibros(@Res() res) {
        const mostrarlibros = await this.aplicativoservice.getMostrarLibros();
        return res.status(HttpStatus.OK).json({
            mostrarlibros
        });
            
    }

    


}
