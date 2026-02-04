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
  console.log("YES CLICKED – IMAGE SHOULD SWAP");

  response.innerText = `Excellent choice ${emoji} Your Valentine is smiling right now.`;

  // 🎆 Confetti
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  // 🔒 Hard fade-out (bulletproof)
  photo.style.transition = "opacity 0.6s ease-in-out";
  photo.style.opacity = "0";

  setTimeout(() => {
    // Swap image
    photo.src = YES_IMAGE;

    // 🔓 Fade back in
    photo.style.opacity = "1";
  }, 600);

  yesBtn.disabled = true;
  noBtn.disabled = true;
});


