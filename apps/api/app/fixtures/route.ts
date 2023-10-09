import { NextResponse } from 'next/server';
import { season } from '@arsenalamerica/utils';

const TEAM_ID = 19;
// const TV_STATION_COUNTRY_ID = 3483;
const api_token = process.env.MONK_TOKEN || '';

// TODO: Get all domains from asset.json files for each application
const DOMAINS = [
  '*.vercel.app',
  'cascadiagooners.com',
  'pdxgooners.com',
  'tacomagooners.com',
  'vancouverarsenal.com',
];

const url = `https://api.sportmonks.com/v3/football/fixtures/between/${season.start}/${season.end}/${TEAM_ID}`;
const params = {
  include: [
    ['league', ['name', 'image_path'].join()].join(':'),
    ['participants', ['name', 'short_code', 'image_path'].join()].join(':'),
    // 'round',
    'scores',
    // 'tvStations.tvstation', // leave commented for now until filtering by country works
    ['venue', ['name', 'city_name'].join()].join(':'),
  ].join(';'),
  // filters: ['scoreDescriptions', 'CURRENT'].join(':'),
  // filters: ['tvStationCountry_ids', TV_STATION_COUNTRY_ID].join(':'), // leave commented for now until filtering by country works
};

const fetchUrl = new URL(url);
const fetchParams = new URLSearchParams({ api_token, ...params }).toString();
fetchUrl.search = fetchParams;

export async function GET() {
  const res = await fetch(
    fetchUrl,
    { next: { revalidate: 15 * 60 } }, // Revalidate every 15 minutes
  );
  const data = await res.json();

  return NextResponse.json(
    { ...data },
    {
      headers: {
        'Access-Control-Allow-Origin':
          process.env.NODE_ENV === 'development'
            ? '*'
            : DOMAINS.map((domain) => 'https://' + domain).join(', '),
        'Access-Control-Allow-Methods': 'GET',
      },
    },
  );
}
