import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class HomeArticle{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    article: string;
}