function parseQueryString(query) {
	const vars = query && '?' === query[0] ? query.substr(1).split('&') : query.split('&')
	const result = {}
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return result;
}
