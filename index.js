function changeH1() {
  document.querySelector("h1").innerText = "ahahah ma sei bravo";
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

function () {
  
}
changeH1();
changeBg();
changeAddress();
changeClassAmazon();
