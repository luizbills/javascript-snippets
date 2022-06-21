export const escapeHTML = (str) => {
	const entityMap = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
		'/': '&#x2F;',
		'`': '&#x60;',
		'=': '&#x3D;'
	};

	return ('' + str).replace(/[&<>"'`=\/]/g, function (s) {
		return entityMap[s];
	});
}

// usage
escapeHTML('<div></div>'); // => "&lt;div&gt;&lt;&#x2F;div&gt;"
