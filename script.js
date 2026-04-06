const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const resultado = document.getElementById("resultado");

likeBtn.addEventListener("click", () => {
    resultado.textContent = "¡Te gusta este contenido! 😎";
});

dislikeBtn.addEventListener("click", () => {
    resultado.textContent = "No te gustó 😢";
});

const guardar = document.getElementById("guardar");
const comentario = document.getElementById("comentario");
const lista = document.getElementById("listaComentarios");

guardar.addEventListener("click", () => {
    const texto = comentario.value;

    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);

    comentario.value = "";
});

const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});