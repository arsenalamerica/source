import { getFetchUrl } from '@arsenalamerica/utils';

const TEAM_ID = 19;
const api_token = process.env.MONK_TOKEN || '';

// Use the current month to determine when the API data switches to next season
const d = new Date();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();

// NOTE: currentMonth starts at index 0. Switch the season over in June (index 5)
const seasonYearStart = currentMonth > 5 ? currentYear : currentYear - 1;
const seasonYearEnd = seasonYearStart + 1;

const seasonStartDate = `${seasonYearStart}-07-01`;
const seasonEndDate = `${seasonYearEnd}-05-31`;
const url = `https://soccer.sportmonks.com/api/v2.0/fixtures/between/${seasonStartDate}/${seasonEndDate}/${TEAM_ID}`;
const params = {
  api_token,
  include: [
    'localTeam',
    'visitorTeam',
    'lineup',
    'tvstations',
    'round',
    'stage',
    'referee',
    'venue',
    'league',
  ].join(),
};

// INCLUDE OPTIONS:
// localTeam visitorTeam substitutions goals cards other events corners lineup bench sidelined comments tvstations highlights round stage referee venue odds inplayOdds flatOdds localCoach visitorCoach group trends firstAssistant secondAssistant fourthOfficial stats shootout league stats probability valuebet news

const fetchUrl = getFetchUrl(url, params);

export async function GET() {
  const res = await fetch(fetchUrl, {
    method: 'GET',
  });
  const data = await res.json();

  return Response.json({ ...data });
}
