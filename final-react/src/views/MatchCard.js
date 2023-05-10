import React from 'react';

export default function MatchCard({ teamData, gameData, seasonData }) {
  if (gameData['HomeOrAway'] !== 'HOME') {
    return;
  }
  const homeTeam = gameData['Team'];
  const awayTeam = gameData['Opponent'];
  let homeTeamIMG;
  let awayTeamIMG;
  let homeEarnedPoints;
  let awayEarnedPoints;
  let homeGivenPoints;
  let awayGivenPoints;

  teamData[0].map((team) => {
    if (team.Key === homeTeam) {
      homeTeamIMG = team.WikipediaLogoUrl;
    }
    if (team.Key === awayTeam) {
      awayTeamIMG = team.WikipediaLogoUrl;
    }
  });
  seasonData[0].map((total) => {
    console.log(total.Score);
    if (total.Team === homeTeam) {
      homeEarnedPoints = (total.Score / total.Games).toFixed(2);
      homeGivenPoints = (total.OpponentScore / total.Games).toFixed(2);
    }
    if (total.Team === awayTeam) {
      awayEarnedPoints = (total.Score / total.Games).toFixed(2);
      awayGivenPoints = (total.OpponentScore / total.Games).toFixed(2);
    }
  });

  return (
    <div className="card col my-3" style={{ width: '18rem' }}>
      <div class="row">
        <img
          className="float-left col mt-4"
          style={{ width: '75px', height: '75px', objectFit: 'contain' }}
          src={homeTeamIMG}
          alt={homeTeam}
        />
        <img
          className="float-right col mt-4"
          style={{ width: '75px', height: '75px', objectFit: 'contain' }}
          src={awayTeamIMG}
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
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: 'center' }}
        >
          {homeEarnedPoints}
        </p>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: 'center' }}
        >
          {awayEarnedPoints}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: 'center' }}
        >
          {homeGivenPoints}
        </p>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: 'center' }}
        >
          {awayGivenPoints}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{
            textAlign: 'center',
            background:
              homeEarnedPoints - awayGivenPoints >
              awayEarnedPoints - homeGivenPoints
                ? 'green'
                : 'red',
          }}
        >
          {(homeEarnedPoints - awayGivenPoints).toFixed(2)}
        </p>
        <p
          className="card-text text-justify-right col"
          style={{
            textAlign: 'center',
            background:
              awayEarnedPoints - homeGivenPoints >
              homeEarnedPoints - awayGivenPoints
                ? 'green'
                : 'red',
          }}
        >
          {(awayEarnedPoints - homeGivenPoints).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
