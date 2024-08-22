import { NextResponse } from 'next/server';

import { smStandings } from '@arsenalamerica/sportmonks';

// This League ID is for the Premier League and we can use it to make the table live results once the season starts
// const LEAGUE_ID = 8;

export async function GET() {
  try {
    const { data, ...rest } = await smStandings(undefined, {
      include: [
        ['participant', ['name', 'short_code', 'image_path'].join()].join(':'),
        'details.type',
        'form',
      ].join(';'),
    });

    console.log(rest);

    const cleanData = data.map(({ details, ...rest }) => ({
      ...rest,
      stats: Object.fromEntries(
        details.map(({ type, value }) => [type.code, value]),
      ),
    }));

    return NextResponse.json(cleanData);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
