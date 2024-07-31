import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class GundamArsenalBaseMS{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    msAbility: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    msActiveCondition: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    msTargetType: string;

    @Column({
        type:"integer",
        nullable: true
    })
    msAbilityRange: number;

    @Column({
        type:"integer",
        nullable: true
    })
    msAbilityCost: number;

    @Column({
        type:"text",
        nullable: true
    })
    msAbilityDesc: string;
}