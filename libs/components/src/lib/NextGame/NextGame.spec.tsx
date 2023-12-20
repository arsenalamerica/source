import { render } from '@testing-library/react';

import { NextGameComponent } from './NextGameComponent';
import SWRProvider from '../Main/SWRProvider';

// TODO: set up React Testing Library providers so this is not part of the test itself
describe('NextGameComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SWRProvider>
        <NextGameComponent />
      </SWRProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
