import { ApiProperty } from '@nestjs/swagger';
import { Produto } from 'src/produto/entity/produto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column()
  @ApiProperty()
  descricao: string;

  @OneToMany(() => Produto, produto => produto.categoria)
  @ApiProperty({ type: () => Produto, isArray: true })
  produtos: Produto[];
}
