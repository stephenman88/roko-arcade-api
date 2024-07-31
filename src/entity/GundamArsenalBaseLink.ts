import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class GundamArsenalBaseLink{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: false
    })
    linkAbility: string;

    @Column({
        type:"text",
        nullable: false
    })
    linkEffect: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: false
    })
    requirement: string;
}