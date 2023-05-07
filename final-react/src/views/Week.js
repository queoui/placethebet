import React, { useState, useEffect } from 'react';
import getTeamSeasonStats from '../utils/seasonStats';

function Week(props) {
  const [week, setWeek] = useState('1');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getTeamSeasonStats(week));
  }, [week]);

  console.log(data);

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
          <a className="dropdown-item" href="/week1">
            Week 1
          </a>
          <a className="dropdown-item" href="/week2">
            Week 2
          </a>
          <a className="dropdown-item" href="/week3">
            Week 3
          </a>
          <a className="dropdown-item" href="/week4">
            Week 4
          </a>
          <a className="dropdown-item" href="/week5">
            Week 5
          </a>
          <a className="dropdown-item" href="/week6">
            Week 6
          </a>
          <a className="dropdown-item" href="/week7">
            Week 7
          </a>
          <a className="dropdown-item" href="/week8">
            Week 8
          </a>
          <a className="dropdown-item" href="/week9">
            Week 9
          </a>
          <a className="dropdown-item" href="/week10">
            Week 10
          </a>
          <a className="dropdown-item" href="/week11">
            Week 11
          </a>
          <a className="dropdown-item" href="/week12">
            Week 12
          </a>
          <a className="dropdown-item" href="/week13">
            Week 13
          </a>
          <a className="dropdown-item" href="/week14">
            Week 14
          </a>
          <a className="dropdown-item" href="/week15">
            Week 15
          </a>
          <a className="dropdown-item" href="/week16">
            Week 16
          </a>
          <a className="dropdown-item" href="/week17">
            Week 17
          </a>
          <a className="dropdown-item" href="/week18">
            Week 18
          </a>
        </div>
      </div>
    </main>
  );
}

export default Week;
