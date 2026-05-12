import 'reflect-metadata';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'items' })
export class Item {
  @PrimaryColumn('text')
  id!: string;

  @Column('text')
  title!: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt!: Date;
}
