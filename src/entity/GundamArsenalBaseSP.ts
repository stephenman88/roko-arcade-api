import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { GundamArsenalBaseCard } from "./GundamArsenalBaseCard";

@Entity()
export class GundamArsenalBaseSP{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    spAbilityName: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    spTargetType: string;

    @Column({
        type:"integer",
        nullable: true
    })
    spAbilityRange: number;

    @Column({
        type:"integer",
        nullable: true
    })
    spAbilityCost: number;

    @Column({
        type:"integer",
        nullable: true
    })
    spAbilityDamage: number;

    @Column({
        type: "text",
        nullable: true
    })
    spAbilityDesc: string;

    @OneToMany(()=>GundamArsenalBaseCard, (card) => card.spAbility)
    cards: GundamArsenalBaseCard[]
}