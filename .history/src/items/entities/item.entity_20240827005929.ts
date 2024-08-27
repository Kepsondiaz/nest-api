import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    
}
