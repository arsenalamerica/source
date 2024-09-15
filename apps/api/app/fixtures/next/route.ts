import { NextResponse } from 'next/server';

import { smFixtures, smTvStation } from '@arsenalamerica/sportmonks';
import { season } from '@arsenalamerica/utils';

import logger from '../../logger';

const USA_COUNTRY_ID = 3483;

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 5; // 30 seconds

export async function GET() {
  try {
    const { data, ...rest } = await smFixtures(undefined, {
      include: [
        'league:name,image_path',
        'participants:name,short_code,image_path',
        'scores',
        'state',
        'periods',
        'tvStations',
        'venue:name,city_name',
      ].join(';'),
      // All active or upcoming fixture states: https://docs.sportmonks.com/football/tutorials-and-guides/tutorials/includes/states#state-interactions
      filters: ['fixtureStates:1,2,3,22,4,6,21,6,7,25,9'].join(';'),
      sort_by: 'starting_at',
      order: 'asc',
      per_page: ['1'].join(';'),
    });

    const tvstations = await Promise.all(
      data[0].tvstations
        .filter(({ country_id }) => country_id === USA_COUNTRY_ID)
        .map(async (tvstation) => {
          const { data } = await smTvStation(tvstation.tvstation_id);
          return { ...tvstation, ...data };
        }),
    );
    data[0].tvstations = tvstations;

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
