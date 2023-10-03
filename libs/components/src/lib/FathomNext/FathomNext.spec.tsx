import { render } from '@testing-library/react';

import { FathomNext } from './FathomNext';

describe('Fathom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FathomNext fathomId="123" />);
    expect(baseElement).toBeTruthy();
  });
});
