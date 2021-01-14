import React from 'react';
import {shallow} from 'enzyme';
import PokemonCard from '../../PokemonCard';
import mockedPokemon from '../tests/mockedPokemon.json';

describe('PokemonCard', () => {
    describe('Rendering', () => {
        it('should match to snapshot loading', () => {
            const component = shallow(
              <PokemonCard
                pokemon={mockedPokemon}
                loading
              />)
            expect(component).toMatchSnapshot()
        });

        it('should match to snapshot loaded', () => {
          const component = shallow(
            <PokemonCard
              pokemon={mokedPokemon}
              loading={false}
            />)
          expect(component).toMatchSnapshot()
      });
    });
});
