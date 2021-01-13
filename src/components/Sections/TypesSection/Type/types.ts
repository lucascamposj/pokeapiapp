import { ImageSourcePropType } from 'react-native';

interface TypesObjectInterface {
  [key: string]: {
    color: string;
    image: ImageSourcePropType;
  };
}

const typesObject: TypesObjectInterface = {
  bug: {
    color: '#9DC130',
    image: require('../../../../assets/images/pokemonTypes/bug.png'),
  },
  dragon: {
    color: '#0773C7',
    image: require('../../../../assets/images/pokemonTypes/dragon.png'),
  },
  fairy: {
    color: '#EF97E6',
    image: require('../../../../assets/images/pokemonTypes/fairy.png'),
  },
  fire: {
    color: '#F8A54F',
    image: require('../../../../assets/images/pokemonTypes/fire.png'),
  },
  ghost: {
    color: '#6970C5',
    image: require('../../../../assets/images/pokemonTypes/ghost.png'),
  },
  ground: {
    color: '#D78555',
    image: require('../../../../assets/images/pokemonTypes/ground.png'),
  },
  normal: {
    color: '#9A9DA1',
    image: require('../../../../assets/images/pokemonTypes/normal.png'),
  },
  psychic: {
    color: '#F87C7A',
    image: require('../../../../assets/images/pokemonTypes/psychic.png'),
  },
  steel: {
    color: '#5596A4',
    image: require('../../../../assets/images/pokemonTypes/steel.png'),
  },
  shadow: {
    color: '#81A1BE',
    image: require('../../../../assets/images/pokemonTypes/shadow.png'),
  },
  dark: {
    color: '#5F606D',
    image: require('../../../../assets/images/pokemonTypes/dark.png'),
  },
  electric: {
    color: '#EDD53F',
    image: require('../../../../assets/images/pokemonTypes/electric.png'),
  },
  fight: {
    color: '#D94256',
    image: require('../../../../assets/images/pokemonTypes/fight.png'),
  },
  flying: {
    color: '#9BB4E8',
    image: require('../../../../assets/images/pokemonTypes/flying.png'),
  },
  grass: {
    color: '#5DBE62',
    image: require('../../../../assets/images/pokemonTypes/grass.png'),
  },
  ice: {
    color: '#7ED4C9',
    image: require('../../../../assets/images/pokemonTypes/ice.png'),
  },
  poison: {
    color: '#B563CE',
    image: require('../../../../assets/images/pokemonTypes/poison.png'),
  },
  rock: {
    color: '#CEC18C',
    image: require('../../../../assets/images/pokemonTypes/rock.png'),
  },
  water: {
    color: '#559EDF',
    image: require('../../../../assets/images/pokemonTypes/water.png'),
  },
  unknown: {
    color: '#000203',
    image: require('../../../../assets/images/pokemonTypes/unknown.png'),
  },
};

export default typesObject;
