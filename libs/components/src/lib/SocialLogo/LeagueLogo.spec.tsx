import { render } from '@testing-library/react';

import { SocialLogo } from './SocialLogo';

describe('SocialLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SocialLogo leagueId={2} name="League Name" fallback="img_path" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
