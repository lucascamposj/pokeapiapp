import React from 'react';
import {shallow} from 'enzyme';
import Form from '../../Form';

describe('Form', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const form =
              {
                name: "Overgrow",
                url: "url-test.com"
              }

            const component = shallow(
              <Form
                form={form}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
