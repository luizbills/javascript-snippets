function parseQueryString(query) {
	if (query.length > 0 && query[0] === '?') {
		query = query.substr(1)
	}
	const vars = query.split('&');
	const result = {}
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		const key = decodeURIComponent(pair[0])
		const value = decodeURIComponent(pair[1])
		result[key] = value;
	}
	return result;
}
