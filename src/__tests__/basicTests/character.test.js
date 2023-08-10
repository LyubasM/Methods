import Character from '../../Character';

test('Check name while character creating', () => {
  const bowman = new Character('Teo', 'Bowman');
  expect(bowman.name).toBe('Teo');
});

test('Check throwing name error while character creating', () => {
  expect(() => { const test = (name, type) => new Character(name, type); test('T', 'Bowman'); }).toThrow('Имя должно быть не менее 2 и не более 10 символов');
});

test('Check throwing type error while character creating', () => {
  expect(() => { const test = (name, type) => new Character(name, type); test('Teo', 'Bwman'); }).toThrow('Указан несуществующий тип персонажа');
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
