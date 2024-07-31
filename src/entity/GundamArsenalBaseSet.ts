import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class GundamArsenalBaseSet{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: false
    })
    name: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: false
    })
    shortName: string;
}