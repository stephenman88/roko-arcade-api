

class SPAbility{
    constructor(
        spAbilityName: string,
        spTargetType: string,
        spAbilityRange: number,
        spAbilityCost: number,
        spAbilityDamage:number,
        spAbilityDesc: string
    ){
        if(spAbilityName||spTargetType||spAbilityCost||spAbilityDesc){
            throw Error("Nonnullable field in spAbility is null");
        }
        
        if((!spAbilityRange && spAbilityRange % 1 != 0) ||
            spAbilityCost % 1 != 0 ||
            (!spAbilityDamage && spAbilityDamage % 1 != 0)
        ){
            throw Error("Non-integer found in spAbility object");
        }
    }
}

export default SPAbility;