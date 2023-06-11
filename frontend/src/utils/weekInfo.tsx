async function getWeekInfo(season, week) {
	try {
		const nflUrl = '/api/nfl/odds/json/ScoresByWeek/'
			.concat(season)
			.concat('REG/')
			.concat(week);
		const apikey = import.meta.env.VITE_API_KEY;

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

export default getWeekInfo;
