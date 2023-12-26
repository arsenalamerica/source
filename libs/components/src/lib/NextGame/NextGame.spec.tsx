import { render } from '@testing-library/react';
import { Boundaries } from '@bjeco/blocks';
import { NextGameComponent } from './NextGameComponent';
import SWRProvider from '../Main/SWRProvider';

// TODO: set up React Testing Library providers so this is not part of the test itself
describe('NextGameComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SWRProvider>
        <Boundaries>
          <NextGameComponent />
        </Boundaries>
      </SWRProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
