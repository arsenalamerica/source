import styles from './LeagueTable.module.scss';

import { StandingEntity } from '@arsenalamerica/sportmonks';
// import { useErrorBoundary } from 'react-error-boundary';

export function LeagueTable({ standings }: { standings: StandingEntity[] }) {
  // const { showBoundary } = useErrorBoundary();

  // if (error) {
  //   showBoundary(error);
  // }

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
                <span>{team.participant.name}</span>
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
