const Joke = require('awesome-dev-jokes');


function sayHello(name){
    console.log(`Hello ${name}`);
}

function sayGoodbye(name){
    console.log(`Goodbye ${name}`);
}

function tellJoke(){
    console.log(Joke.getRandomJoke());
}

let x = 5;

module.exports = {sayHello, sayGoodbye, tellJoke};