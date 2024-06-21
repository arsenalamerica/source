import { NextResponse } from 'next/server';
import { season } from '@arsenalamerica/utils';

const TEAM_ID = 19;
const api_token = process.env.MONK_TOKEN || '';

const url = `https://api.sportmonks.com/v3/football/fixtures/between/${season.start}/${season.end}/${TEAM_ID}`;
const params = {
  include: [
    ['league', ['name', 'image_path'].join()].join(':'),
    ['participants', ['name', 'short_code', 'image_path'].join()].join(':'),
    'scores',
    ['venue', ['name', 'city_name'].join()].join(':'),
  ].join(';'),
  filters: [['fixtureStates', ['1'].join()].join(':')].join(';'),
  per_page: ['1'].join(';'),
};

const fetchUrl = new URL(url);
const fetchParams = new URLSearchParams({ api_token, ...params }).toString();
fetchUrl.search = fetchParams;

export async function GET() {
  try {
    const res = await fetch(
      fetchUrl,
      { next: { revalidate: 15 * 60 } }, // Revalidate every 15 minutes
    );
    const data = await res.json();
    return NextResponse.json({ season, ...data });
  } catch (error) {
    return NextResponse.json({
      season,
      status: 500,
      error,
    });
  }
}
