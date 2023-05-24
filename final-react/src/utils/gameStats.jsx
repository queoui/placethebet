
async function getTeamGameStats(week) {
  try {
    const nflUrl = '/api/nfl/odds/json/TeamGameStats/2022REG/';
    const apikey = import.meta.env.VITE_API_KEY
    let response = await fetch(
      nflUrl.concat(
        week
      ),
      {
        headers: {
          'Ocp-Apim-Subscription-Key': apikey,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export default getTeamGameStats;
