let lista = document.getElementById("lista");

const hamburger = document.getElementById("hamburger").addEventListener("click",function () {
    lista.classList.toggle("active")
});

for (let index = 1; index <= 4; index++) {
    let element = document.getElementById("itemList"+index).addEventListener("click",function() {
        lista.classList.remove("active")
    });
}
