"use strict";


const Dog = {
    Name: "Dog",
    Age: 8,
    Breed: "chihauha",
    Furcolour: "lightbrown"
};

Dog.Age = Dog.Age + 1 ;
Dog.HouseTrained = false;

console.log(Dog);

alert ( `Hello, My name is ${Dog.Name} and I am a very cute ${Dog.Age} year old ${Dog.Breed}. My fur is ${Dog.Furcolour}.`);