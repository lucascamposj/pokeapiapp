import React from 'react';
import {shallow} from 'enzyme';
import Stat from '../../Stats';

describe('Stats', () => {
    describe('Rendering', () => {
        it('should match to snapshot with effort > 0', () => {
            const stat =
              {
                stat: {
                  name: "attack",
                },
                effort: 1,
                base_stat: 450
              }
            const component = shallow(
              <Stat
                stat={stat.stat}
                effort={stat.effort}
                base_stat={stat.base_stat}
              />)
            expect(component).toMatchSnapshot()
        });
        it('should match to snapshot with effort = 0', () => {
          const stat =
            {
              stat: {
                name: "attack",
              },
              effort: 0,
              base_stat: 450
            }
          const component = shallow(
            <Stat
              stat={stat.stat}
              effort={stat.effort}
              base_stat={stat.base_stat}
            />)
          expect(component).toMatchSnapshot()
      });
    });
});
