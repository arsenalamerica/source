'use client';

import { isDevelopment } from '@arsenalamerica/utils';
import { Boundaries } from '@bjeco/blocks';

import LeagueTableComponent from './LeagueTableComponent';
import LeagueTableError from './LeagueTableError';
import LeagueTableLoading from './LeagueTableLoading';

export function LeagueTable() {
  return (
    <Boundaries
      ErrorComponent={isDevelopment ? undefined : LeagueTableError}
      SuspenseComponent={LeagueTableLoading}
    >
      <LeagueTableComponent />
    </Boundaries>
  );
}

export default LeagueTable;
