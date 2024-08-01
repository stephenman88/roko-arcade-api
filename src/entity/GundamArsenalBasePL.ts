import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import { GundamArsenalBaseCard } from "./GundamArsenalBaseCard";

@Entity()
export class GundamArsenalBasePL{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: "varchar",
        length: 255
    })
    plAbilityName: string;

    @Column({
        type: "varchar",
        length: 255
    })
    plAbilityActiveCondition: string;

    @Column({
        type:"text"
    })
    plAbilityDesc: string;

    @ManyToOne(() => GundamArsenalBaseCard, (card) => card.plAbility)
    cards: GundamArsenalBaseCard[];
}