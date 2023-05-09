import React from 'react';

export default function MatchCard(teamData, gameData, seasonData) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        // src={teamData.WikipediaLogoUrl}
        src="..."
        alt="team info Card"
      />
      <div className="card-body">
        <p className="card-text">
          {gameData['Team']} , {gameData['Opponent']}
        </p>
      </div>
    </div>
  );
}
