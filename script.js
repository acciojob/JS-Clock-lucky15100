function setClock() {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  // Get the current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the degrees for rotation
  const secondDegrees = (seconds / 60) * 360 + 90; // Add 90 degrees to offset initial rotation
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = ((hours % 12) / 12) * 360 + 90;

  // Apply rotation to clock hands
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Update the clock every second
setInterval(setClock, 1000);

// Call the function to set the initial clock position
setClock();
