import React from 'react';
import PokemonCard from '../../PokemonCard';
import {shallow} from 'enzyme';
import { defaultTheme } from '../../../../theme';
import {ThemeProvider} from 'styled-components/native';
import 'jest-styled-components';

import mockedPokemon from '../tests/__mocks__/mockedPokemon.json';
import mockedPokemonWithoutType from '../tests/__mocks__/mockedPokemonWithoutType.json';

export function shallowWithTheme(child) {
  return shallow(child, {
      wrappingComponent: ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>,
  });
}

describe('PokemonCard', () => {
    describe('Rendering', () => {
        it('should match to snapshot loading', () => {
            const component = shallowWithTheme(
              <PokemonCard
                pokemon={mockedPokemon}
                loading={true}
                theme={defaultTheme}
              />
            )
            expect(component).toMatchSnapshot()
        });

        it('should match to snapshot loaded', () => {
          const component = shallowWithTheme(
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
