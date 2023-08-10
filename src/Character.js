const charactersList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть не менее 2 и не более 10 символов');
    } else if (!charactersList.includes(type)) {
      throw new Error('Указан несуществующий тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Нельзя пинать умершего');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
