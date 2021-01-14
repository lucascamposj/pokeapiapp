import React from 'react';
import {shallow} from 'enzyme';
import FullPageListItem from '../../FullPageListItem';

describe('FullPageListItem', () => {
    describe('Rendering', () => {
        it('should match to snapshot loaded', () => {
            const mockPressItem = jest.fn();
            const component = shallow(
              <FullPageListItem
                name={'Test nome'}
                onPressItem={mockPressItem}
                url="url-test.com"
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
