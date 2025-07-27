document.addEventListener('DOMContentLoaded', () => {
  let currentAudio = null;
  let currentPlayingCard = null;

  const teamCards = document.querySelectorAll('.team-card');

  teamCards.forEach(card => {
    const audioSrc = card.getAttribute('data-audio');
    const playBtn = card.querySelector('.play-btn');
    const stopBtn = card.querySelector('.stop-btn');

    const audio = new Audio(audioSrc);
    audio.loop = true;

    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if(currentPlayingCard) currentPlayingCard.classList.remove('playing');
      }

      audio.play();
      currentAudio = audio;
      currentPlayingCard = card;
      card.classList.add('playing');
    });

    stopBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.pause();
      audio.currentTime = 0;

      if (currentPlayingCard === card) {
        card.classList.remove('playing');
        currentAudio = null;
        currentPlayingCard = null;
      }
    });

    // Card click to enlarge with animated glow
    card.addEventListener('click', () => {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
      } else {
        teamCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      }
    });
  });

  // Clicking outside closes enlarged card
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.team-card')) {
      teamCards.forEach(c => c.classList.remove('active'));
    }
  });
});
