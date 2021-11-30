//public String name = ""

// declaration name:type = value

let number1:number= 5;
const firstname:string='Terra';

function sayName(personName:string):void{
    console.log(personName);

}
sayName(firstname);

interface CanineInt{
    breed:string;
}

function canineBreed(canine: CanineInt):string{
    return canine.breed;
}

let someCanine = {breed:'German Shepherd'};
console.log(canineBreed(someCanine));


class Canine implements CanineInt{
    breed:string;

    constructor(breed:string){
        this.breed = breed;   
     }

     sound(){
         console.log('Woof');
     }
}


