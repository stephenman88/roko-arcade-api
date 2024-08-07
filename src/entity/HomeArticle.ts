import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class HomeArticle{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    title: string;

    @Column("text")
    article: string;
}