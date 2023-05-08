import React, { useState, useEffect, useReducer } from 'react';
import getTeamGameStats from '../utils/gameStats';
import getTeamInfo from '../utils/teamInfo';
import getSeasonStats from '../utils/seasonStats';
import TeamCard from './TeamCard';

function teamReducer(teamData, action) {
  switch (action.type) {
    case 'getTeamData':
      return [...teamData, action.payload.teamData];
    default:
      return teamData;
  }
}

function seasonReducer(seasonData, action) {
  switch (action.type) {
    case 'getSeasonData':
      return [...seasonData, action.payload.teamData];
    default:
      return seasonData;
  }
}

function Week(props) {
  const [week, setWeek] = useState('1');
  const [gameData, setData] = useState([]);
  const [teamData, dispatchTeamData] = useReducer(teamReducer, []);
  const [seasonData, dispatchSeasonData] = useReducer(seasonReducer, []);

  useEffect(() => {
    getTeamGameStats(week).then((gameData) => setData(gameData));
  }, [week]);

  useEffect(() => {
    getTeamInfo().then((teamData) =>
      dispatchTeamData({ type: 'getTeamData', payload: { teamData: teamData } })
    );
    getSeasonStats().then((seasonData) =>
      dispatchSeasonData({
        type: 'getSeasonData',
        payload: { SeasonData: seasonData },
      })
    );
  }, []);

  const handleWeekChange = (event) => {
    const buttonName = event.target.textContent;
    setWeek(buttonName.replace(/^\D+/g, ''));
  };

  console.log(teamData);
  return (
    <main className="container">
      <h1 className="text-black">Week {week}</h1>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose Week
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 1
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 2
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 3
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 4
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 5
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 6
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 7
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 8
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 9
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 10
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 11
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 12
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 13
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 14
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 15
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 16
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 17
          </button>
          <button className="dropdown-item" onClick={handleWeekChange}>
            Week 18
          </button>
        </div>
      </div>
      {teamData[0].map((teamData) => {
        return (
          <TeamCard
            key={teamData.TeamID}
            teamData={teamData}
            gameData={gameData}
            seasonData={seasonData}
          />
        );
      })}
    </main>
  );
}

export default Week;
