async function getTeamInfo(week) {
  try {
    const nflUrl = '/api/nfl/fantasy/json/Teams'
    const apikey = import.meta.env.VITE_API_KEY
    let response = await fetch(
      nflUrl,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': apikey,
        },
      }
    );
    return JSON.stringify(response.json());

    // return await response.json();
  } catch (err) {

    console.error(err);
  }
}

export default getTeamInfo;
