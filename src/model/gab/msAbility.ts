

class msAbility{
    constructor(
        msAbility:string,
        msActiveCondition: string,
        msTargetType:string,
        msAbilityRange: number,
        msAbilityCost: number,
        msAbilityDesc: string
    ){
        if(msAbility||msActiveCondition||msTargetType||msAbilityCost||msAbilityDesc){
            throw Error("Nonnullable field in msAbility is null");
        }

        if((!msAbilityRange && msAbilityRange % 1 != 0) || msAbilityCost % 1 != 0){
            throw Error("Non-integer number in object");
        }
    }
}

export default msAbility;