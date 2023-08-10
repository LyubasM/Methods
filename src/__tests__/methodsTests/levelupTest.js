import Character from '../../Character';
import Bowman from '../../Bowman';
import Daemon from '../../Daemon';
import Magician from '../../Magician';
import Swordsman from '../../Swordsman';
import Zombie from '../../Zombie';
import Undead from '../../Undead';

test('Testing levelUp method throws error', () => {
  const testCharacter = new Character('Tom', 'Daemon');
  testCharacter.health = 0;
  expect(() => { testCharacter.levelUp(); }).toThrowError('Нельзя повысить левел умершего');
});

test('Testing levelUp Bowman method', () => {
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

test('Testing levelUp Daemon method', () => {
  const daemon = new Daemon('Deo');
  daemon.health = 20;
  daemon.levelUp();
  const expected = {
    name: 'Deo',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(daemon).toEqual(expected);
});

test('Testing levelUp Magician method', () => {
  const magician = new Magician('Meo');
  magician.health = 20;
  magician.levelUp();
  const expected = {
    name: 'Meo',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(magician).toEqual(expected);
});

test('Testing levelUp Swordsman method', () => {
  const swordsman = new Swordsman('Seo');
  swordsman.health = 20;
  swordsman.levelUp();
  const expected = {
    name: 'Seo',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(swordsman).toEqual(expected);
});

test('Testing levelUp Zombie method', () => {
  const zombie = new Zombie('Zeo');
  zombie.health = 20;
  zombie.levelUp();
  const expected = {
    name: 'Zeo',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(zombie).toEqual(expected);
});

test('Testing levelUp Undead method', () => {
  const undead = new Undead('Uvo');
  undead.health = 20;
  undead.levelUp();
  const expected = {
    name: 'Uvo',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(undead).toEqual(expected);
});
