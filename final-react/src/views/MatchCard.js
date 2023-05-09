import React from 'react';

export default function MatchCard({ teamData, gameData, seasonData }) {
  const homeTeam =
    gameData['HomeOrAway'] === 'HOME' ? gameData['Team'] : gameData['Opponent'];
  const awayTeam =
    gameData['HomeOrAway'] === 'AWAY' ? gameData['Team'] : gameData['Opponent'];
  let homeTeamIMG;
  let awayTeamIMG;

  teamData[0].map((team) => {
    console.log(team.Key);
    console.log(homeTeam);
    if (team.Key === homeTeam) {
      homeTeamIMG = team.WikipediaLogoUrl;
      console.log(homeTeamIMG);
    }
    if (team.Key === awayTeam) {
      awayTeamIMG = team.WikipediaLogoUrl;
    }
  });

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        src={homeTeamIMG}
        // src="..."
        alt={homeTeam}
      />
      <img
        className="card-img-top"
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
