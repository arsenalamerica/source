'use client';

import useSWR from 'swr';
import styles from './LeagueTable.module.scss';
import { useErrorBoundary } from 'react-error-boundary';
import { StandingData } from '@arsenalamerica/types';
import LeagueTableLoading from './LeagueTableLoading';

export function LeagueTableComponent() {
  const { showBoundary } = useErrorBoundary();
  const { data, error } = useSWR('standings');

  if (error) {
    showBoundary(error);
  }
  if (!data.data) {
    // console.log(data);
    return <LeagueTableLoading />;
  }

  // Get the list of standings
  const standings: StandingData['data'] = data.data;

  return (
    <div className={styles._}>
      <table>
        <caption>Premier League Table</caption>
        <thead>
          <tr>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>GF</th>
            <th>GA</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr key={team.id}>
              <td>
                <img
                  src={team.participant.image_path}
                  alt={team.participant.name}
                />{' '}
                {team.participant.name}
              </td>
              <td>{team.stats['overall-matches-played']}</td>
              <td>{team.stats['overall-won']}</td>
              <td>{team.stats['overall-draw']}</td>
              <td>{team.stats['overall-lost']}</td>
              <td>
                {team.stats['overall-goals-for'] -
                  team.stats['overall-goals-against']}
              </td>
              <td>{team.stats['overall-goals-for']}</td>
              <td>{team.stats['overall-goals-against']}</td>
              <td>{team.stats['overall-points']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(standings, null, 2)}</pre> */}
    </div>
  );
}

export default LeagueTableComponent;
