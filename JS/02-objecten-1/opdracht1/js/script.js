"use strict";


const Dog = {
    Name: "Dog",
    Age: 8,
    Breed: "chihauha",
    Furcolour: "lightbrown"
};

console.log(Dog);

Dog.Age = Dog.Age + 1;
Dog.HouseTrained = false;

var filthyHabit = Dog.HouseTrained ? "And I'm well behaved" : "I still like to pee in my owner's shoe"; 

console.log(Dog);

alert ( `Hello, My name is ${Dog.Name} and I am a very cute ${Dog.Age} year old ${Dog.Breed}. My fur is ${Dog.Furcolour}.`);

let message =  `Hello, My name is ${Dog.Name} and I am a very cute ${Dog.Age} year old ${Dog.Breed}. My fur is ${Dog.Furcolour}. ${filthyHabit}. `;

