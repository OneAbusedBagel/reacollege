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
        alert:(`*${name} immediately flopped onto their side and started snoring.`)
    },
    eat: function() {   
        alert:(`*${name} ate some food.`)
    },
    bark: function() {  
        alert:("BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK BARK.")
    },
    givepaw: function(){
        alert:(`*${name} gave ther paw!`)
    }
};

Dog.Age = Dog.Age + 1 ;
Dog.HouseTrained = false;

console.log(Dog)

alert ( `Hello My name is ${Dog.Name}, My parents are ${Dog.Family.mother} and ${Dog.Family.father} and I am a very cute ${Dog.Age} year old (in dog years!) ${Dog.Breed}. My fur is ${Dog.Furcolour}.`)

Dog.sleep();


Dog.bark();