export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.typeUnicodeIcon = this.getTypeIcon();
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  getTypeIcon() {
    switch (this.type) {
      case 'Bowman':
        return 'U+1F620';
        break;
      case 'Swordsman':
        return 'U+1F621';
        break;
      case 'Magician':
        return 'U+1F9D0';
        break;
      case 'Daemon':
        return 'U+1F47F';
        break;
      case 'Undead':
        return 'U+1F480';
        break;
      case 'Zombie':
        return 'U+1F9DF';
        break;
      default: 
        return '';
        break;
    }
  }
}

const icon = (uni) => {
  return String.fromCodePoint(uni.replace('U+', '0x'));
}

export { icon }