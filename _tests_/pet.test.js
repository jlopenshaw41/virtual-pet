const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the value of the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toBe('Fido');
    });

    it('has an initial age value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);
    });

    it('has an initial hunger value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toBe(0);
    });

    it('has an intial fitness value of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toBe(10);
    });

    it('increments age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toBe(1);
    });

    it('increases hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toBe(5);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toBe(7);
    });
});