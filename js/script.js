if (document.cookie=="") {
  var issetCookie = false;
} else {
  var issetCookie = true;
}

issetCookie ? "":firmar();

function firmar() {
  const menu = document.getElementById("list");
  const reglamento = document.createElement("li")
  reglamento.innerHTML='<div class="circle"><b><span class="material-symbols-outlined" style="color: red;">exclamation</span></b></div><div class="center-text"><p>Firmar Reglamento</p></div>';
  reglamento.id="inivideo"
  reglamento.style.background="rgb(198, 11, 11)";
  menu.prepend(reglamento);
}

let firmreg = document.getElementById('inivideo');
if (typeof(firmreg) != 'undefined' && firmreg != null) {
    firmreg.addEventListener("click", () => {
    firmreg.remove();
    document.cookie="signed=True";
  })
}