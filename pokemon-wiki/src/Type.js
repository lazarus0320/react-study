import styled from 'styled-components';

const TypeData = [
  { name: 'bug', color: '#A8B820' },
  { name: 'dark', color: '#705848' },
  { name: 'dragon', color: '#7038F8' },
  { name: 'electric', color: '#F8D030' },
  { name: 'fairy', color: '#EE99AC' },
  { name: 'fighting', color: '#C03028' },
  { name: 'fire', color: '#F08030' },
  { name: 'flying', color: '#A890F0' },
  { name: 'ghost', color: '#705898' },
  { name: 'grass', color: '#78C850' },
  { name: 'ground', color: '#E0C068' },
  { name: 'ice', color: '#98D8D8' },
  { name: 'normal', color: '#A8A878' },
  { name: 'poison', color: '#A040A0' },
  { name: 'psychic', color: '#F85888' },
  { name: 'rock', color: '#B8A038' },
  { name: 'shadow', color: '#4A4A4A' },
  { name: 'steel', color: '#B8B8D0' },
  { name: 'water', color: '#6890F0' },
];

export const TypeStyle = styled.div`
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  color: white;
  height: 20px;
  line-height: 16px;
`;

export const Type = ({ name }) => {
  const color = TypeData.find((type) => type.name === name)?.color || '#f0f0f0';

  return <TypeStyle style={{ backgroundColor: color }}>{name}</TypeStyle>;
};

export default Type;
