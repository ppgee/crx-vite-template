let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(`background listener： ${msg}，sender id：${sender.id}`)
})