import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicativoModule } from './aplicativo/aplicativo.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [AplicativoModule, MongooseModule.forRoot("mongodb+srv://aplicativo:aplicativo3000@aplicativolibreria.dubud.mongodb.net/Aplicativolibreria?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
