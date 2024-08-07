import Link from "./Link";
import MSAbility from "./MSAbility";
import SPAbility from "./SPAbility";
import Set from "./Set";
import PLAbility from "./PLAbility";

class Card{
    constructor(name:string,
    cardType:string,
    msType:string,
    plType:string,
    parallel:Boolean,
    cost:number,
    rarity:string,
    mobility:number,
    longRange:number,
    shortRange:number,
    hp:number,
    earthMod:string,
    spaceMod:string,
    desertMod:string,
    waterMod:string,
    series:string,
    mainWeapon:string,
    mainWeaponRange:number,
    mainWeaponType:string,
    subWeapon:string,
    subWeaponRange:number,
    subWeaponType:string,
    msAbility: MSAbility,
    spAbility: SPAbility,
    set: Set,
    suitCode: string,
    imageUrlFront: string,
    imageUrlBack: string,
    plAbility: PLAbility,
    links: Link[]) {
        if(name||cardType||parallel||cost||rarity||mobility||longRange||shortRange||
            hp||series||set||imageUrlBack||imageUrlFront||links||msAbility||spAbility
        ){
            throw Error("Non-nullable field in card object is null");
        }

        if(cost % 1 != 0|| mobility % 1 != 0 || longRange % 1 != 0 || shortRange % 1 != 0 || hp % 1 != 0 || mainWeaponRange % 1 != 0 ||
            subWeaponRange % 1 != 0
        ){
            throw Error("Non-integer number found")
        }
    }
}

export default Card;