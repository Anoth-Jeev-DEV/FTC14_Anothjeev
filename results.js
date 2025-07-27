document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".place-buttons button");
  const winnerMessage = document.querySelector(".winner-message");
  const winnerImg = document.getElementById("winner-img");
  let activePlace = null;

  // Update the paths below to your actual images
  const winnerData = {
    1: {
      message: "The Champion of FTC 14 TTC is...",
      imgSrc: "assets/winner/anchor.png",
      alt: "First Place Winner"
    },
    2: {
      message: "The 2nd Runner Up of FTC 14 TTC is...",
      imgSrc: "assets/winner/anchor.png",
      alt: "Second Place Winner"
    },
    3: {
      message: "The 3rd Place Winner of FTC 14 TTC is...",
      imgSrc: "assets/winner/anchor.png",
      alt: "Third Place Winner"
    }
  };

  // Initialize - hide winner image and message
  winnerImg.style.display = "none";
  winnerMessage.textContent = "";

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const place = btn.dataset.place;

      if (activePlace === place) {
        // Hide display and reset buttons
        activePlace = null;
        winnerMessage.textContent = "";
        winnerImg.style.display = "none";
        winnerImg.src = "";
        buttons.forEach(b => {
          b.style.opacity = "1";
          b.style.pointerEvents = "auto";
          b.style.transform = "scale(1)";
          b.classList.remove("active-btn");
        });
      } else {
        activePlace = place;
        const data = winnerData[place];

        winnerMessage.textContent = data.message;
        winnerImg.src = data.imgSrc;
        winnerImg.alt = data.alt;
        winnerImg.style.display = "block";
        winnerImg.style.animation = "winnerEntry 1s ease";

        buttons.forEach(b => {
          if (b.dataset.place !== place) {
            b.style.opacity = "0";
            b.style.pointerEvents = "none";
            b.style.transform = "scale(0)";
            b.classList.remove("active-btn");
          } else {
            b.style.opacity = "1";
            b.style.pointerEvents = "auto";
            b.style.transform = "scale(1.5)";
            b.classList.add("active-btn");
          }
        });
      }
    });
  });

  winnerMessage.textContent = data.message;

// Restart animation
winnerMessage.classList.remove("animated");
void winnerMessage.offsetWidth; // Trigger reflow to restart animation
winnerMessage.classList.add("animated");
  // Show 1st place by default on page load

});
