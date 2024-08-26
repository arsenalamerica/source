import { NextResponse } from 'next/server';

import { smFixtures } from '@arsenalamerica/sportmonks';
import { season } from '@arsenalamerica/utils';

import logger from '../logger';

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 60 * 60; // 1 hour

export async function GET() {
  try {
    const { data, ...rest } = await smFixtures(undefined, {
      include: [
        'league:name,image_path',
        'participants:name,short_code,image_path',
        'scores',
        'state',
        'periods',
        'venue:name,city_name',
      ].join(';'),
      // filters: ['fixtureStates:1'].join(';'),
      per_page: ['60'].join(';'),
    });

    logger.info(rest);

    return NextResponse.json(data);
  } catch (error) {
    logger.error(error);
    return NextResponse.json({
      season,
      status: 500,
      error,
    });
  }
}
