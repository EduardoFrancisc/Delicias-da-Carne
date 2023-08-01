//Seleção dos Elementos
let iconList = document.querySelectorAll("i");
let inp = document.querySelectorAll("input");
let form = document.querySelector("form");
let erro = document.querySelectorAll("span");
let mensagem = document.querySelector("textarea");
let containers = document.getElementsByClassName("checkDefault");
let padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let radio = document.getElementsByClassName("radioDefault");
let icon = iconList[2];
let checks = document.getElementsByClassName("defaultC");
let container = document.querySelectorAll(".checkDefault");
let filho1 = checks[0];
let filho2 = checks[1];
let pai = checks[2];
let dropText = document.getElementsByClassName("dropText");
let dropdown = document.getElementsByClassName("dropdown-content");
let seta = document.querySelectorAll("i");
let select = document.getElementsByClassName("selctorText");
let item = document.querySelectorAll("li");
let textSelector = select[0].textContent;

//Quando o foco entra no input o erro sai
inp[0].addEventListener("focus", function() {
  inp[0].style.border = "none"
  erro[0].classList.add("inativo")
  erro[0].classList.remove("span-required")
});
inp[1].addEventListener("focus", function() {
  inp[1].style.border = "none"
  erro[1].classList.add("inativo")
  erro[1].classList.remove("span-required")
});
inp[2].addEventListener("focus", function() {
  inp[2].style.border = "none"
  erro[2].classList.add("inativo")
  erro[2].classList.remove("span-required")
});
inp[3].addEventListener("focus", function() {
  inp[3].style.border = "none"
  erro[3].classList.add("inativo")
  erro[3].classList.remove("span-required")
});

//Função de erro
function erroInp(i) {
  inp[i].style.border = "1px solid red"
  erro[i].classList.remove("inativo")
  erro[i].classList.add("span-required")
};

//Validação do Formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Nome
  if (inp[0].value == "") {
    erroInp(0);
    return;
  }
  //Sobrenome
  if (inp[1].value == "") {
    erroInp(1);
    return;
  }
  //Email
  if (!padraoEmail.test(inp[2].value)) {
    erroInp(2);
    return;
  }
  //Numero Celular
  if (inp[3].value == "" || inp[3].value.includes("(") || inp[3].value.includes(")") || inp[3].value.includes("-")) {
    erroInp(3);
    return;
  };
  // Tipo de Carne favorita
  if (select[0].classList.contains("select-text") == false) {
    alert("Selecione um tipo carne")
    return;
  }
  //Preferência de Carne
  if (radio[0].classList.contains("iconRadioActive") == false && radio[1].classList.contains("iconRadioActive") == false && radio[2].classList.contains("iconRadioActive") == false) {
    alert("Selecione uma preferência de carne")
    return;
  }
  //Meio de Contato
  if (filho1.classList.contains("iconActive") == false && filho2.classList.contains("iconActive") == false && pai.classList.contains("iconActive") == false) {
    alert("Selecione um meio de contato")
    return;
  }
  //Mensagem
  if (mensagem.value.length < 3) {
    alert("Escreva uma mensagem no campo Mensagem")
    return;
  }
  alert("O Formulário foi enviado");
  form.submit()
});
//----------------------------------------CHECKBOX---------------------------//
pai.addEventListener("click", function() {
  if (pai.classList.value == "defaultC intermedCheck") {
    filho1.setAttribute("class", "defaultC")
    filho2.setAttribute("class", "defaultC")
    pai.setAttribute("class", "defaultC")
  } else {
    pai.classList.toggle("iconActive");
    pai.classList.remove("intermedCheck");
    filho1.classList.toggle("iconActive");
    filho2.classList.toggle("iconActive");
  }
});

filho1.addEventListener("click", function() {
  filho1.classList.toggle("iconActive")
  pai.classList.toggle("intermedCheck")
  if (filho2.classList.contains("iconActive")) {
    pai.classList.add("iconActive")
  } else {
    pai.classList.remove("iconActive")
  }
});

filho2.addEventListener("click", function() {
  filho2.classList.toggle("iconActive")
  pai.classList.toggle("intermedCheck")
  if (filho1.classList.contains("iconActive")) {
    pai.classList.add("iconActive")
  } else {
    pai.classList.remove("iconActive")
  }
});

//-----------------------------------RADIO BUTTON------------------------------------//
radio[0].addEventListener("click", function() {
  radio[0].classList.toggle("iconRadioActive")
  if (radio[0].classList.contains("iconRadioActive")) {
    radio[1].classList.remove("iconRadioActive")
    radio[2].classList.remove("iconRadioActive")
  }
});

radio[1].addEventListener("click", function() {
  radio[1].classList.toggle("iconRadioActive")
  if (radio[1].classList.contains("iconRadioActive")) {
    radio[0].classList.remove("iconRadioActive")
    radio[2].classList.remove("iconRadioActive")
  }
});

radio[2].addEventListener("click", function() {
  radio[2].classList.toggle("iconRadioActive")
  if (radio[2].classList.contains("iconRadioActive")) {
    radio[0].classList.remove("iconRadioActive")
    radio[1].classList.remove("iconRadioActive")
  }
});

//------------------------------------------SELECT------------------------------------//
dropText[0].addEventListener("click", function() {
  dropdown[0].classList.toggle("dropdownActive")
  seta[2].classList.toggle("animacao")
  dropdown[0].addEventListener("click", function() {
    if (dropdown[0].classList.contains("dropdownActive")) {
      dropdown[0].classList.remove("dropdownActive")
      seta.classList.toggle("animacao")
    }
  })
});

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    select[0].innerText = item[i].innerText
    select[0].classList.add("select-text")
  })
}