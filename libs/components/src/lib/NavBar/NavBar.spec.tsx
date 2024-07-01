import { render } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';

import NavBar from './NavBar';

jest.mock('next/navigation');

describe('NavBar', () => {
  beforeAll(() => {
    // @ts-expect-error We are only mocking the toString method, not the entire object
    jest.mocked(useSearchParams).mockReturnValue({
      toString: () => 'mockedToString',
    });
  });
  it('should render successfully', () => {
    const { baseElement } = render(<NavBar />);
    expect(baseElement).toBeTruthy();
  });
});
