const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const messageForm = document.getElementById("messageForm");
const thankYouMsg = document.getElementById("thank-you");

// ===== NO BUTTON =====
let hoverCount = 0;
const messages = ["Ano ayaw?", "Sige na rahh 😭", "Jay naa", "Ano wala?", "G na pls 😩", "ano wala?", "ano ayaw?", "gusto tap", "bigay ayaw?", "bala ka jan!"];
noButton.addEventListener("mouseover", () => {
  hoverCount++;
  if (hoverCount <= messages.length) {
    let msg = document.createElement("p");
    msg.innerText = messages[hoverCount-1];
    Object.assign(msg.style, {
      position:"fixed",
      top:"90px",
      left:"50%",
      transform:"translateX(-50%)",
      color:"#fff",
      fontSize:"1.5rem",
      fontWeight:"bold",
      textShadow:"2px 2px 6px black",
      opacity:"0",
      transition:"opacity 0.5s ease",
      zIndex:"1001",
      pointerEvents:"none"
    });
    document.body.appendChild(msg);
    setTimeout(()=>msg.style.opacity="1",50);
    setTimeout(()=>{msg.style.opacity="0"; setTimeout(()=>msg.remove(),500)},2500);
  }

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const footerHeight = document.querySelector("footer").offsetHeight;
  const x = Math.random()*(windowWidth - noButton.offsetWidth);
  const y = Math.random()*(windowHeight - footerHeight - noButton.offsetHeight - 10);
  noButton.style.position="absolute";
  noButton.style.left = x+"px";
  noButton.style.top = y+"px";
});

// ===== YES BUTTON =====
yesButton.addEventListener("click", () => {
  yesButton.style.display="none";
  noButton.style.display="none";
  document.getElementById("gif").style.display="none";
  document.getElementById("main").style.display="none";

  // Confetti full screen
  const confettiElement = document.getElementById("confetti-canvas");
  Object.assign(confettiElement.style, {position:"fixed", top:"0", left:"0", width:"100%", height:"100%", zIndex:"1000"});
  const confetti = new ConfettiGenerator({ 
    target: confettiElement, max:729, size:1, animate:true,
    props:['circle','square','triangle','line'], 
    colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
    clock:25, rotate:true, start_from_edge:true, respawn:true
  });
  confetti.render();

  // QR container
  const anonForm = document.getElementById("anon-form");
  if(!anonForm) return;

  let qrContainer = document.createElement("div");
  qrContainer.style.position = "relative";
  qrContainer.style.textAlign = "center";
  qrContainer.style.marginTop = "50px";
  qrContainer.style.zIndex = "1001"; // <- para hindi ma-block ng confetti

  let p = document.createElement("p");
  p.innerText = "YUUN OhhhEyy  SALAMAT ETO GCASH KO 143";
  Object.assign(p.style, {
    fontSize:"2rem",
    fontWeight:"bold",
    color:"#fff",
    textShadow:"2px 2px 10px black",
    marginBottom:"10px"
  });
  qrContainer.appendChild(p);

  let qr = document.createElement("img");
  qr.src = "https://uploads.onecompiler.io/43v5nyjh9/3xsprh8sp/Gcash%20ko.png";
  Object.assign(qr.style,{
    width:"220px",
    borderRadius:"12px",
    boxShadow:"0 0 20px rgba(0,0,0,0.5)"
  });
  qrContainer.appendChild(qr);

  anonForm.before(qrContainer);

  // Ensure Anonymous form stays at bottom and clickable
  anonForm.style.position = "relative";
  anonForm.style.marginTop = "100px";
  anonForm.style.zIndex = "1002"; // <- pinakamataas para ma-click
});

// ===== ANONYMOUS FORM =====
if (messageForm) {
  messageForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetch(messageForm.action,{
      method:messageForm.method, 
      body:new FormData(messageForm), 
      headers:{Accept:"application/json"}
    })
    .then(()=>{
      messageForm.reset(); 
      thankYouMsg.style.display="block"; 
      setTimeout(()=>thankYouMsg.style.display="none",3000);
    });
  });
}

// ===== DEV NAME CLICK =====
document.getElementById("devName").addEventListener("click",()=>{
  window.open("https://www.facebook.com/share/17KYDAodYq/");
});
