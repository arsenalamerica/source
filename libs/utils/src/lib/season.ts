// Use the current month to determine when the API data switches to next season
const d = new Date();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();

// NOTE: currentMonth starts at index 0. Switch the season over in August (index 7)
const seasonYearStart = currentMonth > 6 ? currentYear : currentYear - 1;
const seasonYearEnd = seasonYearStart + 1;

const seasonStartDate = `${seasonYearStart}-07-01`;
const seasonEndDate = `${seasonYearEnd}-06-30`;

export const season = {
  start: seasonStartDate,
  end: seasonEndDate,
};
