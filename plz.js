// ====== Get Buttons ======
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

// ====== "No" Button Movement + Messages ======
let hoverCount = 0;

// Mga lalabas na messages sa bawat hover
const messages = [
  "Ano ayaw?",
  "Sige na rahh 😭",
  "Jay naa",
  "ano wala?",
  "G na pls 😩"
];

// Mouseover event para sa "No" button
noButton.addEventListener("mouseover", () => {
  hoverCount++;

  // Pag may message na katapat sa count, ipakita
  if (hoverCount <= messages.length) {
    let message = document.createElement("p");
    message.innerText = messages[hoverCount - 1];
    message.style.position = "absolute";
    message.style.top = "80%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.color = "#fff";
    message.style.fontSize = "1.8rem";
    message.style.fontWeight = "bold";
    message.style.textShadow = "2px 2px 8px black";
    message.style.opacity = "0";
    message.style.transition = "opacity 0.8s ease";
    document.body.appendChild(message);

    // fade-in & fade-out effect
    setTimeout(() => (message.style.opacity = "1"), 100);
    setTimeout(() => {
      message.style.opacity = "0";
      setTimeout(() => message.remove(), 800);
    }, 3000);
  }

  // Move button randomly within screen (avoid footer)
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const footer = document.querySelector("footer");
  const footerHeight = footer ? footer.offsetHeight : 0;

  const x = Math.floor(Math.random() * windowWidth);
  const y = Math.floor(Math.random() * (windowHeight - footerHeight - 100));

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = windowWidth - buttonWidth;
  const maxY = windowHeight - footerHeight - buttonHeight - 10;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
  noButton.style.zIndex = "9999";
});

// ====== "Yes" Button Confetti ======
yesButton.addEventListener("click", () => {
  var confettiElement = document.getElementById('confetti-canvas');
  var confettiSettings = { 
    target: confettiElement, 
    max: 729, 
    size: 1, 
    animate: true, 
    props: ['circle', 'square', 'triangle', 'line'], 
    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], 
    clock: 25, 
    rotate: true,
    start_from_edge: true, 
    respawn: true 
  };

  yesButton.style.display = "none";
  noButton.style.display = "none";

  var gif = document.getElementById("gif");
  var header = document.getElementById("main");
  header.style.display = "none";
  gif.style.display = "none";

  // Confetti background setup
  confettiElement.style.position = "absolute";
  confettiElement.style.top = "0";
  confettiElement.style.left = "0";
  confettiElement.style.width = "100%";
  confettiElement.style.height = "100%";
  confettiElement.style.zIndex = "1000";

  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  // Create message
  let p = document.createElement("p");
  p.innerText = "YON SALAMAT ETO GCASH KO 143";
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.position = "absolute";
  p.style.top = "38%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  p.style.color = "#fff";
  p.style.textShadow = "2px 2px 10px black";
  document.body.appendChild(p);

  // Create image
  let img = document.createElement("img");
  img.src = "https://uploads.onecompiler.io/43v5nyjh9/3xsprh8sp/Gcash%20ko.png";
  img.alt = "Gcash QR or thank you image";
  img.style.position = "absolute";
  img.style.top = "65%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.width = "220px";
  img.style.borderRadius = "12px";
  img.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
  img.style.opacity = "0";
  img.style.transition = "opacity 1s ease";
  document.body.appendChild(img);

  // Fade-in effect
  setTimeout(() => (img.style.opacity = "1"), 200);
});