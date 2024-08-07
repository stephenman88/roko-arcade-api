

class Link{
    constructor(
        linkAbility: String,
        linkEffect: String
    ){
        if(linkAbility||linkEffect){
            throw Error("Link ability or effect has null value")
        }
    }
}

export default Link;