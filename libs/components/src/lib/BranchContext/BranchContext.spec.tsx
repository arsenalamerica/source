import { render } from '@testing-library/react';

import { BranchProvider } from './BranchContext';

const TEST_BRANCH = {
  data: {
    'fathom-id': '1234',
    domain: 'test.com',
    name: 'Branch Name',
  },
};
describe('BranchProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BranchProvider branch={TEST_BRANCH} />);
    expect(baseElement).toBeTruthy();
  });
});
