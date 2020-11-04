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
    it('increments age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toBe(1);
    } )
});