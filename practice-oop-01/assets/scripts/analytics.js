const intervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, 5000)

document.getElementById('stop-analytics-button').addEventListener('click', () => {
  clearInterval(intervalId);
});