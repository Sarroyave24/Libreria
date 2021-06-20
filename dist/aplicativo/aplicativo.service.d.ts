import { Model } from "mongoose";
import { Cliente } from "./interfaces/aplicativo.interface";
import { ClienteDTO } from "./dto/aplicativo.dto";
import { Administrador } from "./interfaces/aplicativo.interface";
import { AdministradorDTO } from "./dto/aplicativo.dto";
import { Libro } from "./interfaces/aplicativo.interface";
import { LibroDTO } from "./dto/aplicativo.dto";
export declare class AplicativoService {
    private readonly clienteModel;
    private readonly administradorModel;
    private readonly libroModel;
    constructor(clienteModel: Model<Cliente>, administradorModel: Model<Administrador>, libroModel: Model<Libro>);
    getObtenerclientes(): Promise<Cliente[]>;
    getMostrarCliente(IDcliente: string): Promise<Cliente>;
    createCliente(ClienteDTO: ClienteDTO): Promise<Cliente>;
    updateCliente(IDcliente: string, ClienteDTO: ClienteDTO): Promise<Cliente>;
    deleteCliente(IDcliente: string): Promise<Cliente>;
    createAdministrador(AdministradorDTO: AdministradorDTO): Promise<Administrador>;
    deleteAdministrador(IDadmin: number): Promise<Administrador>;
    createLibro(LibroDTO: LibroDTO): Promise<Libro>;
    updateLibro(Codigolibro: number, libroDTO: LibroDTO): Promise<Libro>;
    deleteLibro(Codigolibro: number): Promise<Libro>;
    getMostrarLibros(): Promise<Libro[]>;
}
