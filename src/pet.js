const AGE_AT_CREATION = 0;
const HUNGER_AT_CREATION = 0;
const FITNESS_AT_CREATION = 10;

const MIN_HUNGER_LEVEL = 0;
const HUNGER_INCREMENT = 5;
const HUNGER_DECREMENT = 3;
const IS_HUNGRY_THRESHOLD = 5;

const MAX_FITNESS_LEVEL = 10;
const FITNESS_DECREMENT = 3;
const FITNESS_INCREMENT = 4;
const NEEDS_EXERCISE_THRESHOLD = 3;

const PET_DEAD_ERROR_MESSAGE = 'Uh, oh! Your pet is no longer alive :(';


class Pet {

    constructor(name) {
        this.name = name;
        this.age = AGE_AT_CREATION;
        this.hunger = HUNGER_AT_CREATION;
        this.fitness = FITNESS_AT_CREATION;
        this.children = [];
    }

    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
 
    growUp() {
        if (!this.isAlive) {
            throw new Error(PET_DEAD_ERROR_MESSAGE);
        }

        this.age++;
        this.hunger += HUNGER_INCREMENT;
        this.fitness -= FITNESS_DECREMENT;
    }
    
    walk() {
        if (!this.isAlive) {
            throw new Error(PET_DEAD_ERROR_MESSAGE);
        }
        if ((this.fitness + FITNESS_INCREMENT) <= MAX_FITNESS_LEVEL) {
            this.fitness += FITNESS_INCREMENT;
        } else {
            this.fitness = MAX_FITNESS_LEVEL;
        };
    }

    feed() {
        if (!this.isAlive) {
            throw new Error(PET_DEAD_ERROR_MESSAGE)
        }
        if (this.hunger >= HUNGER_DECREMENT) {
            this.hunger -= HUNGER_DECREMENT;
        } else {
            this.hunger = MIN_HUNGER_LEVEL;
        };
    }

    checkUp() {
        if (!this.isAlive) {
            return PET_DEAD_ERROR_MESSAGE;
        } else if(this.fitness <= NEEDS_EXERCISE_THRESHOLD && this.hunger >= IS_HUNGRY_THRESHOLD) {
            return 'I am hungry AND I need a walk';
        } else if (this.fitness <= NEEDS_EXERCISE_THRESHOLD) {
            return 'I need a walk';
        } else if (this.hunger >= IS_HUNGRY_THRESHOLD) {
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