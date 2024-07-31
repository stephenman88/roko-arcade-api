import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class GundamArsenalBaseCard{
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
    cardType: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    msType: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    plType: string;

    @Column({
        type:"boolean",
        nullable: false
    })
    parallel: boolean;

    @Column({
        type:"integer",
    })
    cost: number;

    @Column({
        type:"varchar",
        length: 255
    })
    rarity: string;

    @Column({
        type:"integer"
    })
    mobility: number;

    @Column({
        type:"integer"
    })
    longRange: number;

    @Column({
        type:"integer"
    })
    shortRange: number;

    @Column({
        type:"integer"
    })
    hp: number;

    @Column({
        type:"char",
        nullable: true
    })
    earthMod: string;

    @Column({
        type:"char",
        nullable: true
    })
    spaceMod: string;

    @Column({
        type:"char",
        nullable: true
    })
    desertMod: string;

    @Column({
        type:"char",
        nullable: true
    })
    waterMod: string;

    @Column({
        type:"varchar",
        length: 255
    })
    series: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    mainWeapon: string;

    @Column({
        type:"integer",
        nullable: true
    })
    mainWeaponRange: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    mainWeaponType: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    subWeapon: string;

    @Column({
        type:"integer",
        nullable: true
    })
    subWeaponRange: number;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    subWeaponType: string;

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

    @Column({
        type: "varchar",
        length: 255
    })
    setNum: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    suitCode: string;

    @Column({
        type:"varchar",
        length: 255
    })
    imageUrlFront: string;

    @Column({
        type:"varchar",
        length: 255
    })
    imageUrlBack: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    plAbilityName: string;

    @Column({
        type:"varchar",
        length: 255,
        nullable: true
    })
    plAbilityActiveCondition: string;

    @Column({
        type:"text",
        nullable: true
    })
    plAbilityDesc: string;

    
}