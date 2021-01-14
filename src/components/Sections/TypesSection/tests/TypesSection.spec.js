import React from 'react';
import {shallow} from 'enzyme';
import TypesSection from '../../TypesSection';

describe('TypesSection', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const types = [
              {
                slot: 3,
                type: {
                  name: "electric",
                  url: "electric.com"
                }
              },
              {
                slot: 2,
                type: {
                  name: "poison",
                  url: "electric.com"
                }
              }
            ]
            const component = shallow(
              <TypesSection
                types={types}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
