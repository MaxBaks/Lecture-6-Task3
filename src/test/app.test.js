import GetCharacterStats from '../js/app';
import Character from '../js/domain';

test('info should be written correctly', () => {
  const char = new Character('Лучник', 'Bowman', 50, 1, 40, 10);

  const expected = '&#128544 (1) &#9876 40 &#128737 10 &#10084 50';

  const result = GetCharacterStats(char);

  expect(result).toBe(expected);
});
