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

    it('sets the value of the children property to an empty array', () => {
        expect(pet.children).toEqual([]);
    })

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

    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Uh, oh! Your pet is no longer alive :(');
    })
});

describe('walk', () => {
    
    let pet;
    
    beforeEach(() => {
        pet = new Pet('Fido');
    });
    
    it('increases fitness level by 4, to a maximum of 10', () => {
        pet.growUp();
        pet.growUp();
        pet.hunger = 0;
        pet.walk();
        
        expect(pet.fitness).toBe(8);
        
        pet.walk();
       
        expect(pet.fitness).toBe(10);
    });

    it('throws an error if the pet is not alive', () => {
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Uh, oh! Your pet is no longer alive :(');
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

    it('throws an error if the pet is not alive', () => {

        pet.age = 30;
        expect(() => pet.feed()).toThrow('Uh, oh! Your pet is no longer alive :(');
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
        pet.hunger = 0;
        pet.growUp();
        
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('returns "I feel great!" if fitness level is 4 or more AND hunger level is 4 or less', () => {
        
        expect(pet.checkUp()).toBe('I feel great!');
    });

    it('returns "Your pet is no longer live :(" if pet is not alive', () => {
        pet.age = 30;

        expect(pet.checkUp()).toBe('Uh, oh! Your pet is no longer alive :(');
    })
});

describe('isAlive', () => {

    let pet;

    beforeEach(() => {
        pet = new Pet('Fido');
    });

    it('returns true if fitness is greater than 0 AND hunger is less than 10 AND age is less than 30', () => {

        expect(pet.isAlive).toBe(true);
    });

    it('returns false if fitness is 0 or less OR hunger is 10 or more OR age is 30 or more', () => {

        pet.fitness = 0;
        pet.hunger = 11;
        pet.age = 45;

        expect(pet.isAlive).toBe(false);
    });
});

describe('adoptChild', () => {
    let pet;
    let child;

    beforeEach(() => {
        pet = new Pet('Fido');
        child = new Pet('Fido Jnr');
    });

    it('takes another object and adds it to the children property', () => {
        pet.adoptChild(child);
        expect(pet.children[0]).toEqual(child);
    })
})

    