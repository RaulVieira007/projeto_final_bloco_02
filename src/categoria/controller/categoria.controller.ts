import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../service/categoria.service";
import { Categoria } from "../entity/categoria.entity";
import { get } from "http";
import { ApiTags } from "@nestjs/swagger";



@ApiTags("Categorias de Produtos Farmacêutico")
@Controller('categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Post()
    create(@Body() data: Categoria) {
        return this.categoriaService.create(data);
    }

    @Get()
    findAll() {
        return this.categoriaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoriaService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: Categoria) {
        return this.categoriaService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.categoriaService.remove(id);
    }
}