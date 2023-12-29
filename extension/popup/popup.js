const btn = document.getElementById("btn");

async function handleClick() {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	const response = await chrome.tabs.sendMessage(tab.id, { message: "html please" });
	console.log({ response });
}

btn.addEventListener("click", handleClick);