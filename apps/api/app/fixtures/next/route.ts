import { NextResponse } from 'next/server';

import { smFixtures } from '@arsenalamerica/sportmonks';
import { season } from '@arsenalamerica/utils';

// const USA_COUNTRY_ID = 3483;

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 60 * 60; // 1 hour

export async function GET() {
  try {
    const { data, ...rest } = await smFixtures(undefined, {
      include: [
        'league:name,image_path',
        'participants:name,short_code,image_path',
        // 'scores',
        // 'tvStations',
        'venue:name,city_name',
      ].join(';'),
      filters: ['fixtureStates:1'].join(';'),
      per_page: ['1'].join(';'),
    });

    // const tvstations = await Promise.all(
    //   data[0].tvstations
    //     .filter(({ country_id }) => country_id === USA_COUNTRY_ID)
    //     .map(async (tvstation) => {
    //       const { data } = await smTvStation(tvstation.tvstation_id);
    //       return { ...tvstation, ...data };
    //     }),
    // );
    // data[0].tvstations = tvstations;

    console.log(rest);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      season,
      status: 500,
      error,
    });
  }
}
