document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".order-btn");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
