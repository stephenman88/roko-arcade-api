import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class HomeNews{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}