const destinations = ["Belgium", "Mordor", "Kazachstan"];
let travelAdvice;

travelAdvice = " result: " + ((destinations.includes("Mordor")) ? "One does not simply walk into Mordor." : "If you like piña coladas, and gettin' caught in the rain.");

console.log(travelAdvice);

let isAdmin = true;
let content;

content = ((isAdmin) ? "In dit administratiepaneel kunt u alle instellingen aanpassen." : "geen administratief toestemming..");

console.log(content);

let age = 17;
let message;


message = (age >=18 ? "Je mag zelfstandig autorijden." : (age >= 16.5 ? "Je mag al beginnen met rijlessen" : "Je bent nog te jong om te autorijden.")   )

console.log(message);
