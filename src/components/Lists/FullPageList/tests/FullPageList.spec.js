import React from 'react';
import {shallow, mount} from 'enzyme';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../../../../theme';
import FullPageList from '../../FullPageList';
import 'jest-styled-components';

// executes shallow with ThemeProvider as context
export function shallowWithTheme(child) {
  return shallow(child, {
      wrappingComponent: ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>,
  });
}

describe('FullPageListItem', () => {
    describe('Rendering', () => {
        it('should match to snapshot loaded', () => {
            const list = [
              {
                name: "Pikachu",
                url: "pikachu.com.br"
              },
              {
                name: "Bulbasaur",
                url: "bulbasaur.com.br"
              }
            ]
            const mockEndReachedHandler = jest.fn();
            const mockPressItem = jest.fn();

            const component = shallowWithTheme(
              <FullPageList
                list={list}
                loading={false}
                onEndReached={mockEndReachedHandler}
                onPressItem={mockPressItem}
              />)
            expect(component).toMatchSnapshot()
        });

        it('should match to snapshot loading', () => {
          const list = [
            {
              name: "Pikachu",
              url: "pikachu.com.br"
            },
            {
              name: "Bulbasaur",
              url: "bulbasaur.com.br"
            }
          ]
          const mockEndReachedHandler = jest.fn();
          const mockPressItem = jest.fn();

          const component = shallowWithTheme(
            <FullPageList
              list={list}
              loading={true}
              onEndReached={mockEndReachedHandler}
              onPressItem={mockPressItem}
            />)
          expect(component).toMatchSnapshot()
        });

        it('should match to snapshot with loading prop undefined ', () => {
          const list = [
            {
              name: "Pikachu",
              url: "pikachu.com.br"
            },
            {
              name: "Bulbasaur",
              url: "bulbasaur.com.br"
            }
          ]
          const mockEndReachedHandler = jest.fn();
          const mockPressItem = jest.fn();

          const component = shallowWithTheme(
            <FullPageList
              list={list}
              onEndReached={mockEndReachedHandler}
              onPressItem={mockPressItem}
            />)
          expect(component).toMatchSnapshot()
        });
    });
});
