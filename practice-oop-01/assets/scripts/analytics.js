const intervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, 3000)

document.getElementById('stop-analytics-button').addEventListener('click', () => {
  clearInterval(intervalId);
});