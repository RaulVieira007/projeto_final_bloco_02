import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from '../controller/produto.controller';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../entity/produto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
})
export class ProdutoModule { }
