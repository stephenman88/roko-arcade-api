import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { GundamArsenalBaseCard } from "./GundamArsenalBaseCard";

@Entity()
export class GundamArsenalBaseSet{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: false,
        unique: true
    })
    name: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: false,
        unique: true
    })
    shortName: string;

    @OneToMany(()=> GundamArsenalBaseCard, (card) => card.set)
    cards: GundamArsenalBaseCard[];
}