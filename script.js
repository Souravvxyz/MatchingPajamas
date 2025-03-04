// Set the target date (December 25th of the current year)
const currentYear = new Date().getFullYear();
const targetDate = new Date(`December 25, ${currentYear} 00:00:00`).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update HTML
  document.getElementById('days').innerText = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById('timer').innerHTML = "It's Christmas!";
  }
}

// Update every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
