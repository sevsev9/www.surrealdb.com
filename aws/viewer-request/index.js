exports.main = async (event) => {

	const request = event.Records[0].cf.request;

	if (request.headers.host[0].value !== 'surrealdb.com') {

		const path = request.querystring ? `${request.uri}?${request.querystring}` : request.uri;

		return {
			status: '301',
			statusDescription: 'Moved Permanently',
			headers: {
				location: [{
					key: 'Location',
					value: `https://surrealdb.com${path}`
				}]
			},
		};

	}

	return request;

};
