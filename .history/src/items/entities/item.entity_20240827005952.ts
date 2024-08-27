import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
  description: string;
}
