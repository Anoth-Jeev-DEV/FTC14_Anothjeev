document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".program-card");
  const modal = document.getElementById("program-modal");
  const closeBtn = document.querySelector(".close-btn");

  const modalTitle = document.getElementById("modal-title");
  const modalRJ = document.getElementById("modal-rj");
  const modalEditor = document.getElementById("modal-editor");
  const modalNames = document.getElementById("modal-names");
  const modalLogo = document.getElementById("modal-logo");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const rj = card.getAttribute("data-rj");
      const editor = card.getAttribute("data-editor");
      const names = JSON.parse(card.getAttribute("data-names"));
      const logo = card.getAttribute("data-logo");

      modalTitle.textContent = title;
      modalRJ.textContent = rj;
      modalEditor.textContent = editor;
      modalLogo.src = logo;

      modalNames.innerHTML = "";
      names.forEach((name, index) => {
        const li = document.createElement("li");
        li.textContent = ` ${index + 1}: ${name}`;
        modalNames.appendChild(li);
      });

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
