import Bowman from '../../Bowman';

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
