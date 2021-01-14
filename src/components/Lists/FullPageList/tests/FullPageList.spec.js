import React from 'react';
import {shallow} from 'enzyme';
import FullPageList from '../../FullPageList';

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

            const component = shallow(
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

          const component = shallow(
            <FullPageList
              list={list}
              loading={true}
              onEndReached={mockEndReachedHandler}
              onPressItem={mockPressItem}
            />)
          expect(component).toMatchSnapshot()
      });
    });
});
