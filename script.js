const flashcards = [
  {
    question: "O que é JavaScript?",
    answer:
      "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web.",
  },
  {
    question: "O que são funções de callback em JavaScript?",
    answer:
      "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação.",
  },
  {
    question: "O que é o this em JavaScript?",
    answer:
      "'this' se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada.",
  },
  {
    question: "O que é hoisting em JavaScript?",
    answer:
      "Hoisting é o comportamento em que declarações de variáveis e funções são movidas para o topo do escopo durante a fase de compilação.",
  },
  {
    question: "O que são tipos primitivos em JavaScript?",
    answer:
      "Os tipos primitivos são: String, Number, Boolean, Null, Undefined, BigInt e Symbol.",
  },
];

let currentIndex = 0;
let showingAnswer = false;

const card = document.getElementById("card");
const cardText = document.getElementById("cardText");
const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");

function updateCard() {
  const currentCard = flashcards[currentIndex];
  cardText.textContent = currentCard.question;
  progress.textContent = `Card ${currentIndex + 1} de ${flashcards.length}`;
  showingAnswer = false;
}

card.addEventListener("click", () => {
  const currentCard = flashcards[currentIndex];

  if (showingAnswer) {
    cardText.textContent = currentCard.question;
    showingAnswer = false;
  } else {
    cardText.textContent = currentCard.answer;
    showingAnswer = true;
  }
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
});

updateCard();
