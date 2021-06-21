import { ClienteDTO } from "./dto/aplicativo.dto";
import { AdministradorDTO } from "./dto/aplicativo.dto";
import { LibroDTO } from "./dto/aplicativo.dto";
import { AplicativoService } from "./aplicativo.service";
export declare class AplicativoController {
    private aplicativoservice;
    constructor(aplicativoservice: AplicativoService);
    crearPost(res: any, ClienteDTO: ClienteDTO): Promise<any>;
    getObtenerclientes(res: any): Promise<any>;
    getMostrarCliente(res: any, IDcliente: any): Promise<any>;
    deleteCliente(res: any, IDcliente: any): Promise<any>;
    updateCliente(res: any, ClienteDTO: ClienteDTO, IDcliente: any): Promise<any>;
    createAdministrador(res: any, AdministradorDTO: AdministradorDTO): Promise<any>;
    deleteAdministrador(res: any, IDadmin: any): Promise<any>;
    createLibro(res: any, LibroDTO: LibroDTO): Promise<any>;
    updateLibro(res: any, LibroDTO: LibroDTO, Codigolibro: any): Promise<any>;
    deleteLibro(res: any, Codigolibro: any): any;
    getMostrarLibros(res: any): Promise<any>;
}
