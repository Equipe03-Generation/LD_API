import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_tema"})
    export class Tema{

        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number
        
        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        @ApiProperty()
        assunto: string
        
        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        @ApiProperty()
        descricao: string
        
        @OneToMany(() => Postagem, (postagem) => postagem.tema)
        postagem: Postagem[]
 }
