// -----------------------------
// IMAGE CONFIG (FROM images FOLDER)
// -----------------------------

const ASK_IMAGE = "images/ask.jpg"; // before approval
const YES_IMAGE = "images/yes.jpg"; // after approval

// -----------------------------
// URL PERSONALIZATION
// -----------------------------

const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "You";
const emoji = params.get("emoji") || "💖";

// -----------------------------
// ELEMENT REFERENCES
// -----------------------------

const nameEl = document.getElementById("name");
const photo = document.getElementById("photo");
const response = document.getElementById("response");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// -----------------------------
// INITIAL STATE
// -----------------------------

nameEl.innerText = `Dear ${name},`;
photo.src = ASK_IMAGE;

// -----------------------------
// NO BUTTON (RUN AWAY LOGIC)
// -----------------------------

let noClickCount = 0;

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

// -----------------------------
// YES BUTTON (CONFETTI + FADE + SWAP)
// -----------------------------

yesBtn.addEventListener("click", () => {
  response.innerText = `Excellent choice ${emoji} Your Valentine is smiling right now.`;

  // 🎍 Confetti
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Fade out image
  photo.classList.add("fade-out");

  setTimeout(() => {
    // Swap to approval image
    photo.src = YES_IMAGE;

    // Fade in
    photo.classList.remove("fade-out");
    photo.classList.add("fade-in");
  }, 500);

  // Lock buttons after approval
  yesBtn.disabled = true;
  noBtn.disabled = true;
});
