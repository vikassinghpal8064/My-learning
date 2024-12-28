// prototype design pattern( also known as Clone Pattern)
// --> what if you want to create a copy of the object, but here the catch you have some 
// private fields in that class or even you have interface of it, it means you dont have 
// that class to see.
var Robot = /** @class */ (function () {
    function Robot(type, numberOfLimbs) {
        this.type = type;
        this.numberOfLimbs = numberOfLimbs;
        Robot.count++;
    }
    Robot.prototype.tellMeType = function () {
        return this.type;
    };
    Robot.prototype.getCount = function () {
        return Robot.count;
    };
    Robot.count = 0;
    return Robot;
}());
var Robot1 = new Robot("humanoid", 4);
console.log(Robot1.tellMeType());
var robot2 = Robot1;
console.log(robot2);
console.log(Robot1);
console.log(Robot1 == robot2);
console.log(robot2.getCount());
var Clone = /** @class */ (function () {
    function Clone(type, numberOfLimbs) {
        this.type = type;
        this.numberOfLimbs = numberOfLimbs;
        Clone.count++;
    }
    Clone.prototype.getClone = function () {
        return new Clone(this.type, this.numberOfLimbs);
    };
    Clone.prototype.getCount = function () {
        return Clone.count;
    };
    Clone.count = 0;
    return Clone;
}());
var Clone1 = new Clone("android", 10);
var Clone2 = Clone1.getClone();
console.log(Clone1 == Clone2);
