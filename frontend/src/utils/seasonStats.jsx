async function getSeasonStats(season) {
  try {
    const nflUrl = '/api/nfl/odds/json/TeamSeasonStats/2022REG';
    const apikey = import.meta.env.VITE_API_KEY;
    let response = await fetch(nflUrl, {
      headers: {
        'Ocp-Apim-Subscription-Key': apikey,
      },
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export default getSeasonStats;
