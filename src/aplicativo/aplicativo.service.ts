import { Inject, Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";


import { Cliente } from "./interfaces/aplicativo.interface";
import { ClienteDTO } from "./dto/aplicativo.dto";
import { Administrador } from "./interfaces/aplicativo.interface";
import { AdministradorDTO } from "./dto/aplicativo.dto";
import { Libro } from "./interfaces/aplicativo.interface";
import { LibroDTO } from "./dto/aplicativo.dto";


@Injectable()
export class AplicativoService {

    constructor(@InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
    @InjectModel('Administrador') private readonly administradorModel: Model<Administrador>,
    @InjectModel('Libro') private readonly libroModel: Model<Libro>) {} 
    

    async getObtenerclientes(): Promise<Cliente[]> {
        const clientes = await this.clienteModel.find()
        return clientes;

    }

    async getMostrarCliente(IDcliente: string): Promise<Cliente>{
        const cliente = await this.clienteModel.findById(IDcliente);
        return cliente; 

    }

    async createCliente(ClienteDTO: ClienteDTO): Promise<Cliente>{
        const createcliente = new this.clienteModel(ClienteDTO);
        return await createcliente.save()
    }

    async updateCliente(IDcliente: string, ClienteDTO: ClienteDTO): Promise<Cliente> {
        const updatecliente = await this.clienteModel.findByIdAndUpdate(IDcliente, ClienteDTO, { new: true});
        return updatecliente;

    }

    async deleteCliente(IDcliente: string): Promise<Cliente> {
        const deletecliente = await this.clienteModel.findByIdAndDelete(IDcliente)
        return deletecliente;


    }

    //Administrador//

    async createAdministrador(AdministradorDTO: AdministradorDTO): Promise<Administrador> {
        const createadministrador = new this.administradorModel(AdministradorDTO);
        return await createadministrador.save()
    }

    async deleteAdministrador(IDadmin: number): Promise<Administrador>{
        const deleteadministrador = await this.administradorModel.findByIdAndDelete(IDadmin)
        return deleteadministrador;
    }

    //Libro//

    async createLibro(LibroDTO: LibroDTO): Promise<Libro>{
        const createlibro = new this.libroModel(LibroDTO);
        return await createlibro.save()
    }

    async updateLibro(Codigolibro: number, libroDTO: LibroDTO): Promise<Libro>{
        const updatelibro = await this.libroModel.findByIdAndUpdate(Codigolibro, LibroDTO, { new: true});
        return updatelibro;
    }

    async deleteLibro(Codigolibro: number): Promise<Libro>{
        const deletelibro = await this.libroModel.findByIdAndDelete(Codigolibro);
        return deletelibro;
    }  

    async getMostrarLibros(): Promise<Libro[]>{
        const mostrarlibros = await this.libroModel.find()
        return mostrarlibros;
    }
}





