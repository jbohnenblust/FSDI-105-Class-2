let pet={
    name:"Yorkie",
    hunger:20,
    happiness:0,
    feed:function(food){
        this.hunger-=food;
        this.happiness+=5;
        console.log(pet);
    }
}

let meat=10;
let carrot=5;
let grass=2;

pet.feed(carrot);

class PetC{
    constructor(name,gender){
        this.name=name;
        this.gender=gender;
        this.hunger=10;
        this.happiness=5;
        this.feedC=function(food){
            this.hunger-=food;
            this.happiness+=5;
            console.log(pet);
        }
    }
}

function create(){
    let inputName=document.getElementById("petName").value;
    let inputGender=document.getElementById("petGender").value;
    let pet3=new PetC(inputName, inputGender);
    console.log(pet3);
}

