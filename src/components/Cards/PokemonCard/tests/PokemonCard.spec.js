import React from 'react';
import {shallow} from 'enzyme';
import PokemonCard from '../../PokemonCard';
import mockedPokemon from '../tests/__mocks__/mockedPokemon.json';

describe('PokemonCard', () => {
    describe('Rendering', () => {
        it('should match to snapshot loading', () => {
            const component = shallow(
              <PokemonCard
                pokemon={mockedPokemon}
                loading={true}
              />)
            expect(component).toMatchSnapshot()
        });

        it('should match to snapshot loaded', () => {
          const component = shallow(
            <PokemonCard
              pokemon={mockedPokemon}
              loading={false}
            />)
          expect(component).toMatchSnapshot()
        });

        it('should match to snapshot with Pokemon without a type', () => {
          const component = shallow(
            <PokemonCard
              pokemon={mockedPokemon}
              loading={false}
            />)
          expect(component).toMatchSnapshot()
        });
    });
});
