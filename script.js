// -----------------------------
// CONFIGURATION (EDIT ONLY HERE)
// -----------------------------

const ASK_IMAGE = "ask.jpg";   // Image shown before approval
const YES_IMAGE = "yes.jpg";   // Image shown after approval

// -----------------------------
// URL PERSONALIZATION (NAME + EMOJI)
// -----------------------------

const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "You";
const emoji = params.get("emoji") || "💖";

// -----------------------------
// APPLY INITIAL STATE
// -----------------------------

const nameEl = document.getElementById("name");
const photo = document.getElementById("photo");
const response = document.getElementById("response");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

nameEl.innerText = `Dear ${name},`;
photo.src = `images/${ASK_IMAGE}`;

// -----------------------------
// NO BUTTON LOGIC (RUN AWAY)
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
// YES BUTTON LOGIC (CONFETTI + FADE + IMAGE SWAP)
// -----------------------------

yesBtn.addEventListener("click", () => {
  response.innerText = `Excellent choice ${emoji} Your Valentine is smiling right now.`;

  // 🎆 Confetti
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  // ✨ Fade out
  photo.classList.add("fade-out");

  setTimeout(() => {
    // Swap image
    photo.src = `images/${YES_IMAGE}`;

    // Fade back in
    photo.classList.remove("fade-out");
    photo.classList.add("fade-in");
  }, 500);

  // Optional: disable buttons after acceptance
  yesBtn.disabled = true;
  noBtn.disabled = true;
});
