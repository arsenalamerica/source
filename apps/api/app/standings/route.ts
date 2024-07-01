import { StandingData } from '@arsenalamerica/types';
import { NextResponse } from 'next/server';

// This League ID is for the Premier League and we can use it to make the table live results once the season starts
// const LEAGUE_ID = 8;
const api_token = process.env.MONK_TOKEN || '';

const url = `https://api.sportmonks.com/v3/football/standings/seasons/23614`;
const params = {
  include: [
    ['participant', ['name', 'short_code', 'image_path'].join()].join(':'),
    'details.type',
    'form',
  ].join(';'),
};

const fetchUrl = new URL(url);
const fetchParams = new URLSearchParams({ api_token, ...params }).toString();
fetchUrl.search = fetchParams;

export async function GET() {
  try {
    const res = await fetch(
      fetchUrl,
      { next: { revalidate: 5 * 60 } }, // Revalidate every 5 minutes
    );
    const data = await res.json();

    const cleanData: StandingData = data.data.map(
      ({ details, ...rest }: { details: [] }) => ({
        ...rest,
        stats: Object.fromEntries(
          details.map(
            ({ type, value }: { type: { code: string }; value: number }) => [
              type.code,
              value,
            ],
          ),
        ),
      }),
    );

    return NextResponse.json({ ...data, data: cleanData });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
