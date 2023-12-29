chrome.runtime.onMessage.addListener(function (request, sender, response) {
	const html = document.documentElement.outerHTML;
	console.log(html)
	response({ html });
});
