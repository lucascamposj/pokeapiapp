import React from 'react';
import {shallow} from 'enzyme';
import FullPageListItem from '../../FullPageListItem';

import { defaultTheme } from '../../../../../theme';
import {ThemeProvider} from 'styled-components/native';
import 'jest-styled-components';

// executes shallow with ThemeProvider as context
export function shallowWithTheme(child) {
  return shallow(child, {
      wrappingComponent: ({ children }) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>,
  });
}

describe('FullPageListItem', () => {
    describe('Rendering', () => {
        it('should match to snapshot loaded', () => {
            const mockPressItem = jest.fn();
            const component = shallowWithTheme(
              <FullPageListItem
                name={'Test nome'}
                onPressItem={mockPressItem}
                url="url-test.com"
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
