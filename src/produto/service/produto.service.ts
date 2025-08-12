import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entity/produto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private readonly produtoRepo: Repository<Produto>,
    ) { }

    create(data: Produto) {
        return this.produtoRepo.save(data);
    }

    findAll() {
        return this.produtoRepo.find();
    }

    async findOne(id: number) {
        const produto = await this.produtoRepo.findOneBy({ id });
        if (!produto) {
            throw new NotFoundException(`Produto com ID: ${id} não encontrado.`);
        }
        return produto;
    }

    async update(id: number, data: Produto) {
        await this.findOne(id);
        await this.produtoRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        await this.findOne(id);
        await this.produtoRepo.delete(id);
        return { message: `Produto com ID: ${id} removido com sucesso! ` };
    }
}
