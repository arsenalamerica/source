import { render } from '@testing-library/react';

import { NextGame, NextGameProps } from './NextGame';
import SWRProvider from '../Main/SWRProvider';

const PUB_INFO: NextGameProps['pub'] = {
  name: 'The Pub',
  address: '123 Fake Street',
  website: 'https://www.thepub.com',
};

// TODO: set up React Testing Library providers so this is not part of the test itself
describe('NextGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SWRProvider>
        <NextGame pub={PUB_INFO} />
      </SWRProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
