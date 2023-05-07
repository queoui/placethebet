import React, { useState, useEffect } from 'react';
import getTeamSeasonStats from '../utils/seasonStats';
import getTeamGameStats from '../utils/gameStats';

function Week(props) {
  const [week, setWeek] = useState('1');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getTeamGameStats(week));
  }, [week]);

  console.log(data);

  const handleWeekChange = (event) => {
    const buttonName = event.target.textContent;
    setWeek(buttonName.replace(/^\D+/g, ''));
  };

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
    </main>
  );
}

export default Week;
