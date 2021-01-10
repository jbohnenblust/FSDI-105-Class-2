function displayPets(){

    document.getElementById("pets").innerHTML="";
    document.getElementById("txtSearch").value="";
    //travel the pets array
    for(let i=0;i<salon.pets.length;i++){
        displayPet(salon.pets[i]);
    }
    $("#pets").show();
}

function displayPet(pet){
    if(pet.service==="Full Service"){
        pet.price=10.00
    } else if (pet.service==="Shower"){
        pet.price=6.00
    } else if (pet.service==="Nails Cut"){
        pet.price=7.50
    } else if (pet.service==="Hair Cut"){
        pet.price=8.00
    }

    let icon="";
    let aType= pet.animalType;
    if (aType == "dog"){
        icon = '<i class="animal-icon fas fa-dog"></i>';
    } else if (aType == "rabbit") {
        icon = '<i class="fas fa-carrot"></i>';
    } else if (aType == "cat") {
        icon = '<i class="fas fa-cat"></i>';
    } else if (aType == "dragon") {
        icon = '<i class="fas fa-dragon"></i>';
    }
    let syntax=
    `<div class=pet> 
        
        <h3> Name: ${pet.name} </h3>
        <label>Type: ${icon} ${pet.animalType}</label>
        <p> Age: ${pet.age} </p>
        <p> Gender: ${pet.gender} </p>
        <p> Breed: ${pet.breed} </p>
        <p> Service: ${pet.service} </p>
        <p><b> Price: $${pet.price}</b> </p>
        <p> Owner: ${pet.owner} </p>
        <p> Phone: ${pet.phone} </p>
    </div`;

    document.getElementById('pets').innerHTML+=syntax;
}