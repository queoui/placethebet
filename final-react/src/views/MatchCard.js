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
    <div className="card col my-3" style={{ width: '18rem' }}>
      <div class="row">
        <img
          className="float-left col mt-4"
          style={{ width: '75px', height: '75px', objectFit: 'contain' }}
          src={homeTeamIMG}
          // src="..."
          alt={homeTeam}
        />
        <img
          className="float-right col mt-4"
          style={{ width: '75px', height: '75px', objectFit: 'contain' }}
          src={awayTeamIMG}
          // src="..."
          alt={awayTeam}
        />
      </div>
      <div className="row card-body">
        <h5
          className="card-text text-justify-left col"
          style={{ textAlign: 'center' }}
        >
          {homeTeam}
        </h5>
        <h5
          className="card-text text-justify-right col"
          style={{ textAlign: 'center' }}
        >
          {awayTeam}
        </h5>
      </div>
    </div>
  );
}
