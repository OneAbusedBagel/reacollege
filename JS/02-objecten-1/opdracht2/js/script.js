"use strict";


const Dog = {
    Name: "Dog-dog",
    Age: 6,
    Breed: "Husky",
    Furcolour: "lightgray",
    Family: {
        mother: "Dog-mom",
        father: "Dog-dad"
    },
    sleep: function() { 
        alert(`*${Dog.Name} immediately flopped onto their side and started snoring.`)
    },
    eat: function() {   
        alert(`*${Name} ate some food.`)
    },
    bark: function() {  
        alert("BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK.")
    },
    givepaw: function(){
        alert(`*${Name} gave their paw!`)
    }
};

Dog.Age = Dog.Age + 1 ;
Dog.HouseTrained = false;

console.log(Dog);

var filthyHabit = Dog.HouseTrained ? "And I'm well behaved" : "I still like to pee in my owner's shoe"; 

alert ( `Hello My name is ${Dog.Name}, My parents are ${Dog.Family.mother} and ${Dog.Family.father} and I am a very cute ${Dog.Age} year old (in dog years!) ${Dog.Breed}. My fur is ${Dog.Furcolour}.`);

let message =  `Hello, My name is ${Dog.Name} and I am a very cute ${Dog.Age} year old ${Dog.Breed}. My fur is ${Dog.Furcolour}. ${filthyHabit}. `;


Dog.sleep();

Dog.bark();