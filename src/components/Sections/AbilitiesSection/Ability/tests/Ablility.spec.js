import React from 'react';
import {shallow} from 'enzyme';
import Ability from '../../Ability';

describe('Ability', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const ability = [
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
              <Ability
                ability={ability}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
