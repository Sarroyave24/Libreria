"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicativoModule = void 0;
const common_1 = require("@nestjs/common");
const aplicativo_controller_1 = require("./aplicativo.controller");
const aplicativo_service_1 = require("./aplicativo.service");
const mongoose_1 = require("@nestjs/mongoose");
const aplicativo_schema_1 = require("./schemas/aplicativo.schema");
const aplicativo_schema_2 = require("./schemas/aplicativo.schema");
const aplicativo_schema_3 = require("./schemas/aplicativo.schema");
let AplicativoModule = class AplicativoModule {
};
AplicativoModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Cliente', schema: aplicativo_schema_1.ClienteSchema },
                { name: 'Administrador', schema: aplicativo_schema_2.AdministradorSchema },
                { name: 'Libro', schema: aplicativo_schema_3.LibroSchema }
            ])
        ],
        controllers: [aplicativo_controller_1.AplicativoController],
        providers: [aplicativo_service_1.AplicativoService]
    })
], AplicativoModule);
exports.AplicativoModule = AplicativoModule;
//# sourceMappingURL=aplicativo.module.js.map