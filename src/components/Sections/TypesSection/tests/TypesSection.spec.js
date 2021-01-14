import React from 'react';
import {shallow} from 'enzyme';
import TypesSection from '../../TypesSection';

describe('TypesSection', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const types = [
              {
                type: {
                  name: "Overgrow"
                }
              },
              {
                type: {
                  name: "Chlorophyll"
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
