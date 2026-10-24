const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");

document.querySelectorAll(".certificate a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        popupImg.src = this.href;
        popup.style.display = "flex";
    });
});

popup.addEventListener("click", function(e) {
    if (
        e.target === popup ||
        e.target.classList.contains("close-btn")
    ) {
        popup.style.display = "none";
    }
});


const agent = document.getElementById("agent");

let drag = false;
let offsetX, offsetY;

agent.addEventListener("mousedown", (e) => {
  drag = true;
  offsetX = e.clientX - agent.offsetLeft;
  offsetY = e.clientY - agent.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!drag) return;

  agent.style.left = (e.clientX - offsetX) + "px";
  agent.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  drag = false;
});