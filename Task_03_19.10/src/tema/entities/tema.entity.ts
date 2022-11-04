import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_tema"})
    export class Tema{

        @PrimaryGeneratedColumn()
        id: number
        
        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        titulo: string

        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        categoria: string

        
        
 }