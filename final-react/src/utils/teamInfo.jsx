async function getTeamInfo(week) {
  try {
    const nflUrl = import.meta.env.VITE_NFL_URL + 'nfl/fantasy/json/Teams'
    const apikey = import.meta.env.VITE_API_KEY
    let response = await fetch(
      nflUrl,
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

export default getTeamInfo;
