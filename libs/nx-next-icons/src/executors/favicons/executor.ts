import favicons, { FaviconOptions } from 'favicons';
import * as fs from 'node:fs/promises';
import * as path from 'path';
import { FaviconsExecutorSchema } from './schema';

// For more info on naming conventions for icon files in Next.js for favicon, icon, and apple-icon, see:
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

// const iconOptions = {
//   offset: 10,
// };

const CONFIGURATION: FaviconOptions = {
  background: '#a00',
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    android: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    appleIcon: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    appleStartup: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    favicons: ['favicon.ico'],
    windows: false,
    yandex: false,
  },
  output: {
    images: true,
    files: false,
    html: false,
  },
};

export default async function runExecutor({
  svgLogoPath,
  iconOutputDir,
}: FaviconsExecutorSchema): Promise<{ success: boolean }> {
  if (!svgLogoPath) {
    throw new Error(`'svgLogoPath' is required`);
  }

  if (!iconOutputDir) {
    throw new Error(`'iconOutputDir' is required`);
  }

  console.info('Generating icon files from SVG:', svgLogoPath);

  // Let any of our async functions set this to true if they fail
  let error;

  // Configuration (see above in the README file).

  // Below is the processing.
  const response = await favicons(svgLogoPath, CONFIGURATION);

  // console.log(response.images);

  await fs.mkdir(iconOutputDir, { recursive: true });
  await Promise.all([
    ...response.images.map(
      async (image) =>
        await fs.writeFile(
          path.join(iconOutputDir, image.name),
          image.contents,
        ),
    ),
  ]);

  const success = !error;
  return {
    success,
  };
}
