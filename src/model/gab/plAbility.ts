

class PLAbility{
    constructor(
        plAbilityName: string,
        plAbilityActiveCondition: string,
        plAbilityDesc: string
    ){
        if(plAbilityName||plAbilityActiveCondition||plAbilityDesc){
            throw Error("Nonnullable field in plAbility object is null");
        }
    }
}

export default PLAbility;