const ageAtCreation = 0;
const hungerAtCreation = 0;
const fitnessAtCreation = 10;

const minHungerLevel = 0;
const hungerIncrement = 5;
const hungerDecrement = 3;
const isHungryThreshold = 5;

const maxFitnessLevel = 10;
const fitnessDecrement = 3;
const fitnessIncrement = 4;
const needsExerciseThreshold = 3;

const petDeadErrorMessage = 'Uh, oh! Your pet is no longer alive :(';


class Pet {

    constructor(name) {
        this.name = name;
        this.age = ageAtCreation;
        this.hunger = hungerAtCreation;
        this.fitness = fitnessAtCreation;
        this.children = [];
    }

    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
 
    growUp() {
        if (!this.isAlive) {
            throw new Error(petDeadErrorMessage);
        }

        this.age++;
        this.hunger += hungerIncrement;
        this.fitness -= fitnessDecrement;
    }
    
    walk() {
        if (!this.isAlive) {
            throw new Error(petDeadErrorMessage);
        }
        if ((this.fitness + fitnessIncrement) <= maxFitnessLevel) {
            this.fitness += fitnessIncrement;
        } else {
            this.fitness = maxFitnessLevel;
        };
    }

    feed() {
        if (!this.isAlive) {
            throw new Error(petDeadErrorMessage)
        }
        if (this.hunger >= hungerDecrement) {
            this.hunger -= hungerDecrement;
        } else {
            this.hunger = minHungerLevel;
        };
    }

    checkUp() {
        if (!this.isAlive) {
            return petDeadErrorMessage;
        } else if(this.fitness <= needsExerciseThreshold && this.hunger >= isHungryThreshold) {
            return 'I am hungry AND I need a walk';
        } else if (this.fitness <= needsExerciseThreshold) {
            return 'I need a walk';
        } else if (this.hunger >= isHungryThreshold) {
            return 'I am hungry';
        } else {
            return 'I feel great!';
        }
    }

    adoptChild(childObject) {
        this.children.push(childObject);
    }
};


module.exports = Pet;