const ageAtCreation = 0;
const hungerAtCreation = 0;
const fitnessAtCreation = 10;

const minHungerLevel = 0;
const hungerIncrement = 5;
const hungerDecrement = 3;

const maxFitnessLevel = 10;
const fitnessDecrement = 3;
const fitnessIncrement = 4;


function Pet(name) {
    this.name = name;
    this.age = ageAtCreation;
    this.hunger = hungerAtCreation;
    this.fitness = fitnessAtCreation;
}
 
Pet.prototype = {
    constructor: Pet,
    growUp: function () {
        this.age++;
        this.hunger += hungerIncrement;
        this.fitness -= fitnessDecrement;
    },
    walk: function () {
        if ((this.fitness + fitnessIncrement) <= maxFitnessLevel) {
            this.fitness += fitnessIncrement;
        } else {
            this.fitness = maxFitnessLevel;
        };
    },
    feed: function () {
        if (this.hunger >= hungerDecrement) {
            this.hunger -= hungerDecrement;
        } else {
            this.hunger = minHungerLevel;
        };
    }
}

module.exports = Pet;