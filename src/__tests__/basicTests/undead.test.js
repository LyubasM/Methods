import Undead from '../../Undead';

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
