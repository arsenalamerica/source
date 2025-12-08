import { NextResponse } from 'next/server';

import { smTvStation } from '@arsenalamerica/sportmonks';

import logger from '../../logger';

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchcache
export const fetchCache = 'force-cache';

export async function GET(
  request: Request,
  context: {
    params: Promise<{
      station_id: string;
    }>;
  },
) {
  const station_id = Number((await context.params).station_id);

  try {
    const { data, ...rest } = await smTvStation(station_id);

    logger.info(rest);

    return NextResponse.json(data);
  } catch (error) {
    logger.error(error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
