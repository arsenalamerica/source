// Use the current month to determine when the API data switches to next season
const d = new Date();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();

// NOTE: currentMonth starts at index 0. Switch the season over in June (index 5)
const seasonYearStart = currentMonth > 5 ? currentYear : currentYear - 1;
const seasonYearEnd = seasonYearStart + 1;

const seasonStartDate = `${seasonYearStart}-07-01`;
const seasonEndDate = `${seasonYearEnd}-05-31`;

export const season = {
  start: seasonStartDate,
  end: seasonEndDate,
};
