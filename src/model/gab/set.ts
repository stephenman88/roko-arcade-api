

class set{
    constructor(
        name:String,
        shortName:String
    ){
        if(name||shortName){
            throw Error("Name or shortName in set object is null");
        }
    }
}

export default set;