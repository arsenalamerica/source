import { NextResponse } from 'next/server';

import { smFixtures } from '@arsenalamerica/sportmonks';
import { season } from '@arsenalamerica/utils';

export async function GET() {
  try {
    const { data, ...rest } = await smFixtures(undefined, {
      include: [
        'league:name,image_path',
        'participants:name,short_code,image_path',
        'scores',
        'venue:name,city_name',
      ].join(';'),
      // filters: ['fixtureStates:1'].join(';'),
      per_page: ['50'].join(';'),
    });

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