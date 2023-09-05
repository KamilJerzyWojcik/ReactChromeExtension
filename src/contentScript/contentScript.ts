chrome.runtime.sendMessage("message  from content script", (response) => {
  console.log(response);
});