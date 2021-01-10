let salon={
    title:"The Fashion Pet",
    address:{
        street:"University",
        number:"1234"
    },
    hours:{
        open:"09:00am",
        close:"05:00pm"
    },
    pets:[]
}

function displayOfficeInfo(){
    let {title,hours:{open,close},address:{street,number},pets:[]}=salon;
    document.getElementById("footer-info").innerHTML=`
    <p> 
        ${title} opens at ${open} and closes at ${close} Monday through Friday <br>
        ${street} ${number}
    </p>`;
}

function getPetsFromServer() {

    //TODO: connect to the server to retrieve data
    //for now, we use some hard coded values
let scooby=new Pet("Scooby",50,"Male","Dane","Full Service","Shaggy","555-555-5555","dog");
let snoopy=new Pet("Snoopy",50,"Male","Beagle","Shower","Charlie Brown","666-666-6666","dog");
let scrappy=new Pet("Scrappy",50,"Male","Dane","Nails Cut","Shaggy","555-555-5555","dog");
let speedy=new Pet("Speedy",50,"Male","Mixed","Shower","Bunny","777-777-7777","dog");

salon.pets.push(scooby);
salon.pets.push(snoopy);
salon.pets.push(scrappy);
salon.pets.push(speedy);
}

function register(){
    let inputName=document.getElementById("petName").value;
    let inputAge=document.getElementById("petAge").value;
    let inputGender=document.getElementById("petGender").value;
    let inputBreed=document.getElementById("petBreed").value;
    let inputService=document.getElementById("petService").value;
    let inputOwner=document.getElementById("petOwner").value;
    let inputPhone=document.getElementById("contactPhone").value;
    let inputType=document.getElementById("animalType").value

    let thePet=new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputOwner,inputPhone,inputType);
    salon.pets.push(thePet);
    console.log(thePet);
    console.log(salon.pets);
    profitCalculation();
    countPetsByType();
    
}

function search(){
    //get the text from the input field
    let text = document.getElementById("txtSearch").value;
    //search for the pets with that text (name, owner, phone)
    /**
     * 1 clear the list
     * 2 travel the array
     * 3 get each pet
     * 4 compare if the pet name contains the text or if the pet owner contains the text or if the pet phone... etc
     * 5 display the pet
     */
    document.getElementById("pets").innerHTML="";
    for(let i=0; i<salon.pets.length; i++){
        let pet = salon.pets[i];
        if(
            pet.name.toLowerCase().includes(text.toLowerCase()) || 
            pet.owner.toLowerCase().includes(text.toLowerCase()) || 
            pet.phone.includes(text.toLowerCase()))
            {
                displayPet(pet);
        }
    }
}

function searchByType(animalType){
    console.log(`Searching by: ${animalType}`);
}

function clear(){
    document.getElementById("pets").innerHTML="";
}

// let petNames = [];
// for(let i=0;i<salon.pets.length;i++){
//     petNames.push(salon.pets[i].name);
// }

// document.getElementById("pets").innerHTML=`There are ${petNames.length} pets currently at The Fashion Pet: ${petNames.join(", ")}`;

function profitCalculation(){
    let sum=0
    for(let i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`<h4>Profits: $${sum}</h4>`;
}

function countPetsByType(){
    /**
     * 1 create variables
     * 2 count
     * 3 print results
     */

     let dog=0;
     let cat=0;
     let rabbit=0;
     let dragon=0;

     for(let i=0; i<salon.pets.length; i++){
         switch(salon.pets[i].animalType){
            case 'dog':
                dog++;
                break;
            case 'cat':
                cat++;
                break;
            case 'rabbit':
                rabbit++;
                break;
            case 'dragon':
                dragon++;
                break;
         }
     }
     
     // set the values on the screen
     document.getElementById("dog-count").innerText = dog;
     document.getElementById("cat-count").innerText = cat;
     document.getElementById("rabbit-count").innerText = rabbit;
     document.getElementById("dragon-count").innerText = dragon;
}

function init(){
    console.log("Document ready");
    displayOfficeInfo();
    getPetsFromServer();
    countPetsByType();
    displayPets();
    profitCalculation();
    // $("#pets").addButton("deletePet"); work in progress
}

function removePets(){
    $(".petsJquery").hide();
}

window.onload=init;

