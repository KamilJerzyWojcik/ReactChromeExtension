
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  console.log(sender);
  sendResponse("response from background script");
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('installed');
});