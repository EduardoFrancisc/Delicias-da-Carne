let lista = document.getElementById("lista");
let hamburguer = document.getElementById("hamburguer");

hamburguer.addEventListener("click", function () {
  lista.classList.toggle("active");
  if (lista.className == "header__ul active") {
    hamburguer.classList.toggle("fa-xmark");
  } else {
    hamburguer.classList.remove("fa-xmark");
  }
});

for (let index = 1; index <= 4; index++) {
  let element = document
    .getElementById("itemList" + index)
    .addEventListener("click", function () {
      lista.classList.remove("active");
      hamburguer.classList.remove("fa-xmark");
    });
}