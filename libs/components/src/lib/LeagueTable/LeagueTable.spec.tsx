import { Boundaries } from '@bjeco/blocks';
import { render } from '@testing-library/react';

import SWRProvider from '../Main/SWRProvider';

import { LeagueTableComponent } from './LeagueTableComponent';

// TODO: set up React Testing Library providers so this is not part of the test itself
describe('LeagueTableComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SWRProvider>
        <Boundaries>
          <LeagueTableComponent />
        </Boundaries>
      </SWRProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
