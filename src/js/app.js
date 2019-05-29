import { icon } from './domain';

const GetCharacterStats = ({
  typeUnicodeIcon, level, health, attack, defence,
}) => `${icon(typeUnicodeIcon)} (${level}) ${icon('U+2694')} ${attack} ${icon('U+1F6E1')} ${defence} ${icon('U+2764')} ${health}`;

export default GetCharacterStats;
