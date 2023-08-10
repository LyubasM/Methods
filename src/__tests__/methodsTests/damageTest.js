import Character from '../../Character';
import Bowman from '../../Bowman';
import Daemon from '../../Daemon';
import Magician from '../../Magician';
import Swordsman from '../../Swordsman';
import Zombie from '../../Zombie';
import Undead from '../../Undead';

test('Testing damage method throws error', () => {
  const testCharacter = new Character('Tom', 'Zombie');
  testCharacter.health = 0;
  expect(() => { testCharacter.damage(12); }).toThrowError('Нельзя пинать умершего');
});

test('Bowman damage testing', () => {
  const bowman = new Bowman('Bima');
  bowman.damage(10);
  const expected = {
    name: 'Bima',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

test('Daemon damage testing', () => {
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

test('Magician damage testing', () => {
  const magician = new Magician('Mima');
  magician.damage(10);
  const expected = {
    name: 'Mima',
    type: 'Magician',
    health: 94,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

test('Swordsman damage testing', () => {
  const swordsman = new Swordsman('Sima');
  swordsman.damage(10);
  const expected = {
    name: 'Sima',
    type: 'Swordsman',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expected);
});

test('Zombie damage testing', () => {
  const zombie = new Zombie('Zima');
  zombie.damage(10);
  const expected = {
    name: 'Zima',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});

test('Undead damage testing', () => {
  const undead = new Undead('Uma');
  undead.damage(10);
  const expected = {
    name: 'Uma',
    type: 'Undead',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});
