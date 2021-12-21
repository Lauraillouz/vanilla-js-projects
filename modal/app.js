// select modal-btn, modal-overlay, close-modal-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn: add .open-modal to modal-overlay
// when user clicks close-modal-btn: remove .opeb-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-modal-btn");

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open-modal");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});
