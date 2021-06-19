import { Module } from '@nestjs/common';
import { AplicativoController } from './aplicativo.controller';
import { AplicativoService } from './aplicativo.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ClienteSchema } from "./schemas/aplicativo.schema";
import { AdministradorSchema } from "./schemas/aplicativo.schema";
import { LibroSchema } from "./schemas/aplicativo.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Cliente', schema: ClienteSchema},
      {name: 'Administrador', schema: AdministradorSchema},
      {name: 'Libro', schema: LibroSchema}

    ])

  ],
  controllers: [AplicativoController],
  providers: [AplicativoService]
})
export class AplicativoModule {}
