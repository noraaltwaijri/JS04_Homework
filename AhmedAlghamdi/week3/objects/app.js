//Ahmed Alghamdi - Homework - week 3

/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
var Car= {
    make: 'mazda',
    model:'CX 5',
    year: '2016',
    carStatus:['drive','brake','park'],
  }

  document.write(`<h2>1-</h2>Car :${Car.make}<br>model:${Car.model}<br>year:${Car.year}<br>Status: ${Car.carStatus[0]} , ${Car.carStatus[1]} , ${Car.carStatus[2]}<br>`);
  // Answer Ends Here
  
  // 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.
  
    // 'Owner'
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'owner' has:
    // - a name
    // - an address
  
  //var pet_owner 
  
  // Answer Starts Here
  var Owner = {
    name: "Ali",
    address:"7254 riyadh, al andalus "
  }
  var pet_owner = Owner;

document.write(`<h2>2-</h2>Owner name:${pet_owner.name}<br>address:${pet_owner.address}<br>`);
// console.log("Owner name:",pet_owner.name,'and address:',Owner.address,"\n\n");
// Answer Ends Here

  // 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.
  
    // Pet
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'pet' has:
    // - a name
    // - a species
    // - a breed
    // - a noise that it can make (e.g. 'bark', 'meow', etc.)
    // Every pet can:
    // - make noise (each pet makes its own unique noise, as specified by `noise`.
  
//var some_pet;
  
  // Answer Starts Here
  var Pet = {
    name: 'Oliver',
    species: 'cat',
    breed:'Siamese',
    noise:'meow',
    makeNoise(){
      return this.noise
    }
  }
  var some_pet = Pet;
  document.write(`<h2>3-</h2>name:${Pet.name}<br>species:${Pet.species}<br>breed:${Pet.breed}<br> noise:${Pet.makeNoise()}`);
  // Answer Ends Here
  
  // 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
  //    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
  //    which behaves as described in Q3.
  

  // // Answer Starts Here
  // function constructor(name,species,breed,noise) {
  //   this.name=name;
  //   this.species=species;
  //   this.breed=breed;
  //   this.noise=noise;

  //   document.write(`<h2>4-constructor</h2><br>name:${name}`);//<br>species:${Pet.species}<br>breed:${Pet.breed}<br> noise:${Pet.makeNoise()}`);
  // }
  // Pet.constructor('Crazy monkey','cat','Siamese','meooow');
  // document.write(a);
  // Answer Ends Here
  
  /////////////////////////////////////////////////////////////
  
  // You're done! Refer back to README.md.
  
  /////////////////////////////////////////////////////////////