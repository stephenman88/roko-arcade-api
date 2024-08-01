import link from "./link";
import msAbility from "./msAbility";
import spAbility from "./spAbility";
import set from "./set";
import plAbility from "./plAbility";

class card{
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
    msAbility: msAbility,
    spAbility: spAbility,
    set: set,
    suitCode: string,
    imageUrlFront: string,
    imageUrlBack: string,
    plAbility: plAbility,
    links: link[]) {
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

export default card;