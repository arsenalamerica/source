import { FaviconsExecutorSchema } from './schema';
import executor from './executor';

const options: FaviconsExecutorSchema = {
  iconOutputDir: 'libs/nx-next-icons/src/test-files',
  svgLogoPath: 'libs/nx-next-icons/src/test-files/logo.svg',
};

describe('Favicons Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
