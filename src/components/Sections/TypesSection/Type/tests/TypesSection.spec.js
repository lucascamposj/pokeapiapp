import React from 'react';
import {shallow} from 'enzyme';
import Type from '../../Type';

describe('Type', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const type =
              {
                name: "electric",
                url: "electric.com"
              }
            const component = shallow(
              <Type
                type={type}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
