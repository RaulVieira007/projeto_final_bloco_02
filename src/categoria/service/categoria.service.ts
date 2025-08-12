import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entity/categoria.entity";
import { Repository } from "typeorm";

// Possivel alteração 

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private readonly categoriaRepo: Repository<Categoria>,
    ){}

    async create(data: Categoria) {
        return this.categoriaRepo.save(data);
    }

    findAll() {
        return this.categoriaRepo.find();
    }

    async findOne(id: number) {
        const categoria = await this.categoriaRepo.findOneBy({id});
        if (!categoria) {
            throw new NotFoundException(`Categoria com ID: ${id} não encontrado`);
        }
        return categoria;
    }

    async update (id: number, data: Categoria) {
        const categoria = await this.findOne(id); // Verficia se existe.
        await this.categoriaRepo.update(id, data);
        return {categoria, data};
    }

    async remove(id: number) {
        const categoria = await this.findOne(id); // Verficia se existe.
        await this.categoriaRepo.delete(id);
        return { message: `Categoria com ID ${id} Foi removida com sucesso.` };
    }
}