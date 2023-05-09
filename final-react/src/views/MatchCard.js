import React from 'react';

export default function MatchCard({ teamData, gameData, seasonData }) {
  if (gameData['HomeOrAway'] !== 'HOME') {
    return;
  }
  const homeTeam = gameData['Team'];
  const awayTeam = gameData['Opponent'];
  let homeTeamIMG;
  let awayTeamIMG;

  teamData[0].map((team) => {
    if (team.Key === homeTeam) {
      homeTeamIMG = team.WikipediaLogoUrl;
    }
    if (team.Key === awayTeam) {
      awayTeamIMG = team.WikipediaLogoUrl;
    }
  });

  return (
    <div className="card col" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        style={{ width: '50%', height: '50%' }}
        src={homeTeamIMG}
        // src="..."
        alt={homeTeam}
      />
      <img
        className="card-img-top"
        style={{ width: '50%', height: '50%' }}
        src={awayTeamIMG}
        // src="..."
        alt={awayTeam}
      />
      <div className="card-body">
        <p className="card-text">
          {homeTeam} , {awayTeam}
        </p>
      </div>
    </div>
  );
}
