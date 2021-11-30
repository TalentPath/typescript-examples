"use strict";
//public String name = ""
// declaration name:type = value
var number1 = 5;
var firstname = 'Terra';
function sayName(personName) {
    console.log(personName);
}
sayName(firstname);
function canineBreed(canine) {
    return canine.breed;
}
var someCanine = { breed: 'German Shepherd' };
console.log(canineBreed(someCanine));
var Canine = /** @class */ (function () {
    function Canine(breed) {
        this.breed = breed;
    }
    Canine.prototype.sound = function () {
        console.log('Woof');
    };
    return Canine;
}());
