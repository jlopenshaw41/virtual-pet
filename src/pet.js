const maxFitnessLevel = 10;
const hungerIncrement = 5;
const fitnessDecrement = 3;
const fitnessIncrement = 4;
const ageAtCreation = 0;
const hungerAtCreation = 0;
const fitnessAtCreation = 10;

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
        if (this.fitness >= maxFitnessLevel - fitnessIncrement + 1) {
            this.fitness = maxFitnessLevel;
        } else {
            this.fitness += fitnessIncrement;
        };
    }
}

module.exports = Pet;