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
  //document.querySelectorAll("a").style.
}

changeH1();
changeBg();
changeAddress();
