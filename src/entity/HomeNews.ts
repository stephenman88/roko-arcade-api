import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class HomeNews{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    title: string;

    @Column("text")
    description: string;
}