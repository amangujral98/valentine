// Read values from URL
const params = new URLSearchParams(window.location.search);

const name = params.get("name") || "You";
const emoji = params.get("emoji") || "💖";
const img = params.get("img") || "default.jpg";

// Apply personalization
document.getElementById("name").innerText = `Dear ${name},`;
document.getElementById("photo").src = `images/${img}`;

let noClickCount = 0;
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Refusal button logic
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount < 5) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  } else {
    noBtn.style.display = "none";
    response.innerText = "This option has gracefully exited the conversation.";
  }
});

// Acceptance logic
document.getElementById("yesBtn").addEventListener("click", () => {
  response.innerText = `Excellent choice ${emoji} Your Valentine is smiling right now.`;
});
