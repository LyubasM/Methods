import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Zombie from '../Zombie';
import Undead from '../Undead';

test('Testing levelUp method throws error', () => {
  const testCharacter = new Character('Tom', 'Daemon');
  testCharacter.health = 0;
  expect(() => { testCharacter.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});

test('Testing levelUp method', () => {
  const bowman = new Bowman('Teo');
  bowman.health = 20;
  bowman.levelUp();
  const expected = {
    name: 'Teo',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(bowman).toEqual(expected);
});

test('Testing double levelUp method', () => {
  const swordsman = new Swordsman('Sin');
  swordsman.health = 20;
  swordsman.levelUp();
  swordsman.levelUp();
  const expected = {
    name: 'Sin',
    type: 'Swordsman',
    health: 100,
    level: 3,
    attack: 58,
    defence: 14,
  };
  expect(swordsman).toEqual(expected);
});

test('Testing damage method throws error', () => {
  const testCharacter = new Zombie('Tom');
  testCharacter.health = 0;
  expect(() => { testCharacter.damage(12); }).toThrowError('Нельзя пинать умершего');
});

test('Damage testing', () => {
  const daemon = new Daemon('Dima');
  daemon.damage(10);
  const expected = {
    name: 'Dima',
    type: 'Daemon',
    health: 94,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});

test('Double damage testing', () => {
  const magician = new Magician('Mitya');
  magician.damage(10);
  magician.damage(30);
  const expected = {
    name: 'Mitya',
    type: 'Magician',
    health: 76,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

test('Both levelUp and damage methods testing', () => {
  const undead = new Undead('Bobo');
  undead.damage(10);
  undead.levelUp();
  const expected = {
    name: 'Bobo',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(undead).toEqual(expected);
});
