import GetCharacterStats from '../js/app';
import Character from '../js/domain';

test('info should be written correctly', () => {
  const char = new Character('Лучник', 'Bowman', 50, 1, 40, 10);

  const expected = `${String.fromCodePoint('0x1F620')} (1) ${String.fromCodePoint('0x2694')} 40 ${String.fromCodePoint('0x1F6E1')} 10 ${String.fromCodePoint('0x2764')} 50`;

  const result = GetCharacterStats(char);

  expect(result).toBe(expected);
});
