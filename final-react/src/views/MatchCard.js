import React from 'react';

export default function MatchCard({ teamData, gameData, seasonData }) {
  if (gameData['HomeOrAway'] !== 'HOME') {
    return;
  }
  const homeTeam = gameData['Team'];
  const awayTeam = gameData['Opponent'];
  let homeTeamIMG;
  let awayTeamIMG;
  let homeEarnedYards;
  let awayEarnedYards;
  let homeGivenYards;
  let awayGivenYards;

  teamData[0].map((team) => {
    if (team.Key === homeTeam) {
      homeTeamIMG = team.WikipediaLogoUrl;
    }
    if (team.Key === awayTeam) {
      awayTeamIMG = team.WikipediaLogoUrl;
    }
  });
  seasonData[0].map((total) => {
    if (total.Team === homeTeam) {
      homeEarnedYards = total.OffensiveYards;
      homeGivenYards = total.OpponentOffensiveYards;
    }
    if (total.Team === awayTeam) {
      awayEarnedYards = total.OffensiveYards;
      awayGivenYards = total.OpponentOffensiveYards;
    }
  });

  if (homeEarnedYards - awayGivenYards > awayEarnedYards - homeGivenYards) {
  }

  console.log(awayEarnedYards, typeof awayEarnedYards);
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
          {homeEarnedYards}
        </p>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: 'center' }}
        >
          {awayEarnedYards}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{ textAlign: 'center' }}
        >
          {homeGivenYards}
        </p>
        <p
          className="card-text text-justify-right col"
          style={{ textAlign: 'center' }}
        >
          {awayGivenYards}
        </p>
      </div>
      <div className="row data-body">
        <p
          className="card-text text-justify-left col"
          style={{
            textAlign: 'center',
            background:
              homeEarnedYards - awayGivenYards >
              awayEarnedYards - homeGivenYards
                ? 'green'
                : 'red',
          }}
        >
          {homeEarnedYards - awayGivenYards}
        </p>
        <p
          className="card-text text-justify-right col"
          style={{
            textAlign: 'center',
            background:
              awayEarnedYards - homeGivenYards >
              homeEarnedYards - awayGivenYards
                ? 'green'
                : 'red',
          }}
        >
          {awayEarnedYards - homeGivenYards}
        </p>
      </div>
    </div>
  );
}
