let names=["DeAndre", "Gary","Trey","Jeff","Christian"];
let numbers=[1,2,3,4,5,6,7,8,9];

console.log(names[2]);
console.log(numbers[0]);
//object literal
let student={
    name:"Gary",
    age:30,
    job: true,
    music:["Coldplay", "Maroon 5", "Justin Bieber", "Taylor Swift"],
    address:{
        street:"University",
        number:"1234",
        geoLocation:{
            country:"USA",
            state:"KS",
            city:"Topeka"
        }
    }
}

console.log(`Name: ${student.name}\n Age: ${student.age}\n Job: ${student.job}\n Music: ${student.music}`);
console.log(`${student.music[1]}`);

console.log(`${student.address.geoLocation.country}`);

//object destructuring

let {name,age,job,music,address:{street,number,geoLocation:{country,state}}}=student;
console.log(country);
