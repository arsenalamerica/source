'use client';

import styles from './LeagueTable.module.scss';

// This is just an empty array for us to iterate over to create the loading rows
const loadingStandings = Array.from({ length: 20 });

export function LeagueTableError() {
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
          {loadingStandings.map((team, i) => (
            <tr key={i}>
              <td>
                <img
                  className="loading"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Loading..."
                />{' '}
                <span className="loading">Loading...</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
              <td>
                <span className="loading">0</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueTableError;
