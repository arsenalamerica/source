import * as fs from 'node:fs/promises';
import * as path from 'path';
import * as svg2png from 'svg2png';
import { Svg2pngExecutorSchema } from './schema';

// For more info on naming conventions for icon files in Next.js for favicon, icon, and apple-icon, see:
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

const DEFAULT_APPLE_ICON_SIZES = [120, 180];
const DEFAULT_ANDROID_ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

export default async function runExecutor({
  svgLogoPath,
  iconOutputDir,
}: Svg2pngExecutorSchema): Promise<{ success: boolean }> {
  if (!svgLogoPath) {
    throw new Error(`'svgLogoPath' is required`);
  }

  if (!iconOutputDir) {
    throw new Error(`'iconOutputDir' is required`);
  }

  console.info('Generating icon files from SVG:', svgLogoPath);

  // Let any of our async functions set this to true if they fail
  let error;

  function writePngFromBuffer(
    buffer: Buffer,
    fileNamePrefix: string,
    size: number,
  ) {
    const outputFilePath = path.join(
      iconOutputDir,
      `${fileNamePrefix + size}.png`,
    );

    console.log(`Starting ${fileNamePrefix} size ${size}`);

    return new Promise(function (resolve) {
      svg2png(buffer, { width: size, height: size })
        .then((buffer) => fs.writeFile(outputFilePath, buffer))
        .catch((e) => {
          console.error(e);
          error = e;
        })
        .finally(() => {
          console.log(`Done writing to ${outputFilePath}`);
          resolve(outputFilePath);
        });
    });
  }

  // Read and await our SVG file buffer
  const pngBuffer = await fs.readFile(svgLogoPath);

  // Create an array of all async functions we want to run in parallel and wrap in promise all
  // TODO: Allow configuration for icon size arrays
  await Promise.all([
    ...DEFAULT_APPLE_ICON_SIZES.map(
      async (size) => await writePngFromBuffer(pngBuffer, 'apple-icon', size),
    ),
    ...DEFAULT_ANDROID_ICON_SIZES.map(
      async (size) => await writePngFromBuffer(pngBuffer, 'icon', size),
    ),
  ]);

  const success = !error;
  return {
    success,
  };
}
