import React from 'react';
import {shallow} from 'enzyme';
import FormsSection from '../../FormsSection';

describe('FormsSection', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const forms = [
              {
                name: "Overgrow",
                url: "url-test.com"
              },
              {
                name: "Chlorophyll",
                url: "url-test.com"
              }
            ]
            const component = shallow(
              <FormsSection
                forms={forms}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
