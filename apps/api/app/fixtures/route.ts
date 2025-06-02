import { NextResponse } from 'next/server';

import { smFixtures } from '@arsenalamerica/sportmonks';
import { season } from '@arsenalamerica/utils';

import logger from '../logger';

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
// export const revalidate = 60; // 1 minute

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
      sort_by: 'starting_at',
      order: 'asc',
      per_page: ['50'].join(';'),
    });

    const { data: data2, ...rest2 } = await smFixtures(undefined, {
      include: [
        'league:name,image_path',
        'participants:name,short_code,image_path',
        'scores',
        'state',
        'periods',
        'venue:name,city_name',
      ].join(';'),
      sort_by: 'starting_at',
      order: 'asc',
      per_page: ['50'].join(';'),
      page: ['2'].join(';'),
    });

    logger.info(rest);
    logger.info(rest2);

    return NextResponse.json([...data, ...data2]);
  } catch (error) {
    logger.error(error);
    return NextResponse.json([
      {
        season,
        status: 500,
        error,
      },
    ]);
  }
}
