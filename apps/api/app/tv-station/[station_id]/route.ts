import { NextResponse } from 'next/server';

import { smTvStation } from '@arsenalamerica/sportmonks';

import logger from '../../logger';

// Setting aggressive caching for this route as this data will likely never change during a season

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = Infinity;

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchcache
export const fetchCache = 'force-cache';

export async function GET(
  request: Request,
  context: {
    params: {
      station_id: number;
    };
  },
) {
  const station_id = context.params.station_id;

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
