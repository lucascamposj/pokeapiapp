import React from 'react';
import PokemonCard from '../../PokemonCard';
import {shallow} from 'enzyme';
import { defaultTheme } from '../../../../theme';

import mockedPokemon from '../tests/__mocks__/mockedPokemon.json';
import mockedPokemonWithoutType from '../tests/__mocks__/mockedPokemonWithoutType.json';

describe('PokemonCard', () => {
    describe('Rendering', () => {
        it('should match to snapshot loading', () => {
            const component = shallow(
              <PokemonCard
                pokemon={mockedPokemon}
                loading={true}
                theme={defaultTheme}
              />
            )
            expect(component).toMatchSnapshot()
        });

        it('should match to snapshot loaded', () => {
          const component = shallow(
            <PokemonCard
              pokemon={mockedPokemon}
              loading={false}
              theme={defaultTheme}
            />
          )
          expect(component).toMatchSnapshot()
        });

        it('should match to snapshot with Pokemon without a type', () => {
          const component = shallow(
            <PokemonCard
              pokemon={mockedPokemonWithoutType}
              loading={false}
              theme={defaultTheme}
            />
          )
          expect(component).toMatchSnapshot()
        });
    });
});
