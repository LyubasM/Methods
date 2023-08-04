import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Zombie from '../Zombie';
import Undead from '../Undead';

test('Check name while character creating', () => {
  const bowman = new Character('Teo', 'Bowman');
  expect(bowman.name).toBe('Teo');
});

test('Check throwing error while character creating', () => {
  expect(() => { const test = (name, type) => new Character(name, type); test('Teo', 'Bwman'); }).toThrow('Введены некорректные параметры');
});

test('Creating a new character', () => {
  const result = new Character('Teo', 'Bowman');
  const expected = {
    name: 'Teo',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(result).toEqual(expected);
});

test('Bowman creating', () => {
  const bowman = new Bowman('Bill', 'Bowman');
  const expected = {
    name: 'Bill',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

test('Daemon creating', () => {
  const daemon = new Daemon('Dill');
  const expected = {
    name: 'Dill',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});

test('Magician creating', () => {
  const magician = new Magician('Mill', 'Magician');
  const expected = {
    name: 'Mill',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

test('Swordsman creating', () => {
  const swordsman = new Swordsman('Sill', 'Swordsman');
  const expected = {
    name: 'Sill',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expected);
});

test('Undead creating', () => {
  const undead = new Undead('Uill', 'Undead');
  const expected = {
    name: 'Uill',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});

test('Zombie creating', () => {
  const zombie = new Zombie('Uill', 'Zombie');
  const expected = {
    name: 'Uill',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});
