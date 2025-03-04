function countdown() {
  // Set the target date (December 25th of the current year)
  const currentYear = new Date().getFullYear();
  const eventDate = new Date(`December 25, ${currentYear} 00:00:00`).getTime();

  // Get the current time
  const now = new Date().getTime();

  // Calculate the difference in time
  const diff = eventDate - now;

  // Calculate time components
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the countdown display with leading zeros if necessary
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is finished, display a message
  if (diff < 0) {
    document.getElementById("timer").innerHTML = "Merry Christmas!";
  }
}

// Update the countdown every second
setInterval(countdown, 1000);
countdown();

