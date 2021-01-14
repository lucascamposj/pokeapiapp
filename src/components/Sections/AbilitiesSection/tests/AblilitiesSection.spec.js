import React from 'react';
import {shallow} from 'enzyme';
import AbilitiesSection from '../../AbilitiesSection';

describe('AbilitiesSection', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const abilities = [
              {
                ability: {
                  name: "Overgrow"
                }
              },
              {
                ability: {
                  name: "Chlorophyll"
                }
              }
            ]
            const component = shallow(
              <AbilitiesSection
                abilities={abilities}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
