import { ApiProperty } from '@nestjs/swagger';
import { Categoria } from 'src/categoria/entity/categoria.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @ApiProperty()
  preco: number;

  @Column()
  @ApiProperty()
  validade: Date;

  @Column()
  @ApiProperty()
  quantidade: number;

  @ManyToOne(() => Categoria, categoria => categoria.produtos, { eager: true })
  @ApiProperty({ type: () => Categoria })
  categoria: Categoria;
}
