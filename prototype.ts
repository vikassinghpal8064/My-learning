// prototype design pattern( also known as Clone Pattern)
// --> what if you want to create a copy of the object, but here the catch you have some 
// private fields in that class or even you have interface of it, it means you dont have 
// that class to see.

class Robot{
    private static count=0;
    public type:string;
    public numberOfLimbs:number;
    constructor(type:string,numberOfLimbs:number){
        this.type=type;
        this.numberOfLimbs=numberOfLimbs;
        Robot.count++;
    }

    public tellMeType():string{
        return this.type;
    }
    public getCount():number{
        return Robot.count;
    }
}

const Robot1= new Robot("humanoid",4);
console.log(Robot1.tellMeType())
const robot2=Robot1;

console.log(robot2)
console.log(Robot1)
console.log(Robot1==robot2)
console.log(robot2.getCount());

// notice above this is not the cloning as you are not craeting a new Objet just copying the reference.

interface prototype{
    // readonly count:number,
    type:string,
     numberOfLimbs:number,
     getClone():prototype
}

class Clone implements prototype{
    private static count:number=0;
    public type:string;
    public numberOfLimbs:number;
    constructor(
        
        type:string,
         numberOfLimbs:number,

    ){this.type=type;
        this.numberOfLimbs=numberOfLimbs;
        Clone.count++}

    public getClone(): prototype {
        return new Clone(this.type,this.numberOfLimbs)
    }
    public getCount():number{
        return Clone.count;
    }

}

let Clone1= new Clone("android",10);
let Clone2= Clone1.getClone();
console.log(Clone1==Clone2)