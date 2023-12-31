function changeH1() {
  document.querySelector("h1").innerText = "Titolo Rotto";
}

function changeBg() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}

function changeAddress() {
  let modifiedFooter = document.querySelector("footer").innerText;

  modifiedFooter = modifiedFooter.split("-");
  modifiedFooter[1] = "via sei un grande nr 29, 00000 Roma(nia), Italy";
  document.querySelector("footer").innerText = modifiedFooter
    .toString()
    .replace(",", "- ");
}

function changeClassAmazon() {
  const amazon = document.querySelectorAll("table a");
  for (let i = 0; i < amazon.length; i++) {
    if (amazon[i].href) {
      amazon[i].classList.add("classeLink");
    }
  }
}

function addImgClass() {
  const img = document.querySelectorAll("tr img");
  for (let i = 0; i < img.length; i++) {
    img[i].classList.toggle("editImg");
  }
}

function changeColor() {
  const title = document.querySelectorAll("tbody p");
  for (let i = 0; i < title.length; i++) {
    title[i].style.color =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ")";
  }
}

changeH1();
changeBg();
changeAddress();
changeClassAmazon();
changeColor();

/*:::::::::::::::::::::::::EXTRA::::::::::::::::::::::::::::*/

function effettiIn(obj) {
  let immagine = document.querySelector("#" + obj.id);
  immagine.style.transform = "rotatey(180deg)";
  immagine.style.transition = "0.5s";
  immagine.style.borderRadius = "40px";
}

function effettiOut(obj) {
  let immagine = document.querySelector("#" + obj.id);
  immagine.style.transform = "rotatey(0deg)";
  immagine.style.transition = "0.5s";
  immagine.style.borderRadius = "0px";
}

function cliccami(obj) {
  document.querySelector("#selected").value = obj.alt;
  let immagine = document.querySelector("#" + obj.id);
}
