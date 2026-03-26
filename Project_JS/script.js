const form = document.getElementById("formTarefa");
const input = document.getElementById("inputTarefa");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaTarefas");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();

  if (texto === "") return;

  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);

  mensagem.classList.remove("oculto");
  setTimeout(function () {
    mensagem.classList.add("oculto");
  }, 2000);

  input.value = "";
  input.focus();
});

const btnReiniciar = document.getElementById('btnReiniciar');

btnReiniciar.addEventListener('click', function() {
    lista.innerHTML = '';
});
