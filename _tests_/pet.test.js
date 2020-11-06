const Pet = require('../src/pet');

describe('constructor', () => {
    
    let pet;
    
    beforeEach(() => {
        pet = new Pet('Fido');
    });

    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the value of the name property', () => {
        expect(pet.name).toBe('Fido');
    });

    it('has an initial age value of 0', () => {
        expect(pet.age).toBe(0);
    });

    it('has an initial hunger value of 0', () => {
        expect(pet.hunger).toBe(0);
    });

    it('has an intial fitness value of 10', () => {
        expect(pet.fitness).toBe(10);
    });

});

describe('growUp', () => {

    let pet;
    
    beforeEach(() => {
        pet = new Pet('Fido');
        pet.growUp();
    });

    it('increments age by 1', () => {
        expect(pet.age).toBe(1);
    });

    it('increases hunger by 5', () => {
        expect(pet.hunger).toBe(5);
    });

    it('decreases fitness by 3', () => {
        expect(pet.fitness).toBe(7);
    });
});

describe('walk', () => {
    
    let pet;
    
    beforeEach(() => {
        pet = new Pet('Fido');
    });
    
    it('increases fitness level by 4, to a maximum of 10', () => {
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toBe(8);
        
        pet.walk();
        expect(pet.fitness).toBe(10);
    })
});

describe('feed', () => {

    let pet;

    beforeEach(() => {
        pet = new Pet('Fido');
    });

    it('decreases hunger level by 3, to a minimum of 0', () => {
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toBe(2);

        pet.feed();
        expect(pet.hunger).toBe(0);
    });
});

describe('checkUp', () => {

    let pet;

    beforeEach(() => {
        pet = new Pet('Fido');
    });

    it('returns "I need a walk" if fitness level is 3 or less', () => {

        pet.fitness = 2;

        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('returns "I am hungry" if hunger level is 5 or more', () => {

        pet.growUp();

        expect(pet.checkUp()).toBe('I am hungry');
    });

    it('returns "I am hungry AND I need a walk" if fitness level is 3 or less AND hunger level is 5 or more', () => {
        
        pet.growUp();
        pet.growUp();
        pet.growUp();
        
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns "I feel great!" if fitness level is 4 or more AND hunger level is 4 or less', () => {
        
        expect(pet.checkUp()).toBe('I feel great!');
    })
});

    