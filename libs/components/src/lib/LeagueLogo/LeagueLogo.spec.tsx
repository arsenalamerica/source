import { render } from '@testing-library/react';

import { LeagueLogo } from './LeagueLogo';

describe('LeagueLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LeagueLogo leagueId={2} name="League Name" fallback="img_path" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
