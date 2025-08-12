import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { Produto } from "../entity/produto.entity";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("Produtos Farmacêutico")
@Controller('produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Post()
    create(@Body() data: Produto) {
        return this.produtoService.create(data);
    }

    @Get()
    findAll() {
        return this.produtoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.produtoService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: Produto) {
        return this.produtoService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.produtoService.remove(id);
    }
}
