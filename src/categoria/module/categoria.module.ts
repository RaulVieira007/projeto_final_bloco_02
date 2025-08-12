import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "../entity/categoria.entity";
import { CategoriaController } from "../controller/categoria.controller";
import { CategoriaService } from "../service/categoria.service";


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController], // importa depois
    providers: [CategoriaService], // importa depois
})

export class CategoriaModule {}