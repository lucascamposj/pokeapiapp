import React from 'react';
import {shallow} from 'enzyme';
import FullPageListItem from '../../FullPageListItem';

describe('FullPageListItem', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(
              <FullPageListItem
                name={'Test nome'}
                onPressItem={() => {}}
                url="url-test.com"
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
