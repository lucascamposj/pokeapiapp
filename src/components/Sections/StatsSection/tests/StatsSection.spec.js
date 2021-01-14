import React from 'react';
import {shallow} from 'enzyme';
import StatsSection from '../../StatsSection';

describe('StatsSection', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const stats = [
              {
                stat: {
                  name: "HP",
                  effort: 0,
                  base_stat: 450
                }
              },
              {
                stat: {
                  name: "ATTACK",
                  effort: 2,
                  base_stat: 490
                }
              }
            ]
            const component = shallow(
              <StatsSection
                stats={stats}
              />)
            expect(component).toMatchSnapshot()
        });
    });
});
