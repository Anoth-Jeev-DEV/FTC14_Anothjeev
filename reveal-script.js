// Get all elements
const revealBtn = document.getElementById("revealBtn");
const logoCircle = document.getElementById("logoCircle");
const logoImg = document.getElementById("logoImg");
const countdown = document.getElementById("countdown");
const revealSound = document.getElementById("revealSound");
const downloadBtn = document.getElementById("downloadBtn");

// Reveal button click event
revealBtn.addEventListener("click", () => {
  revealBtn.style.display = "none"; // Hide the reveal button
  logoCircle.classList.remove("hidden"); // Show the logo circle
  countdown.style.display = "block"; // Show countdown
  logoImg.style.display = "none"; // Ensure logo is hidden initially

  revealSound.play(); // Play the sound

  let count = 1;
  countdown.textContent = count;

  const interval = setInterval(() => {
    count++;
    if (count <= 13) {
      countdown.textContent = count;
    } else {
      clearInterval(interval);
      countdown.style.display = "none";
      logoImg.style.display = "block"; // Show logo
      downloadBtn.classList.remove("hidden"); // Show download button
    }
  }, 1000); // One number per second
});
