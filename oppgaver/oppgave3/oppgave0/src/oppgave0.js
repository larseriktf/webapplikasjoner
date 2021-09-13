// Oppgave 1
const removeBtn = document.getElementById("remove-btn");
const remove = document.getElementById("remove");

removeBtn.addEventListener("click", () => {
  remove.remove();
});

// Oppgave 2
const changeBtn = document.getElementById("change-btn");
const change = document.getElementById("change");

changeBtn.addEventListener("click", () => {
  change.innerHTML = "Don't let me leave Murph!";
});

// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

input.addEventListener("change", (event) => {
  let text = event.target.value.toString();
  inputText.innerHTML = text;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const writeBtn = document.getElementById("write-list");

const writeItemsToUl = () => {
  myList.forEach((item) => {
    ul.innerHTML += `<li>${item}</li>`;
  });
};

writeBtn.addEventListener("click", writeItemsToUl);
// Oppgave 5
const text = document.getElementById("text");
const select = document.getElementById("select");
const create = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

const createElement = () => {
  let selectValue = select.value?.toString();
  let element = document.createElement(selectValue);
  element.innerHTML = text.value?.toString();
  placeholder.appendChild(element);
};

create.addEventListener("click", createElement);

// Oppgave 6
const remove_li = document.getElementById("remove-li");
const list = document.getElementById("list");

const removeFromList = () => {
  if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
};

remove_li.addEventListener("click", removeFromList);

// Oppgave 7
const name = document.getElementById("name");
const order = document.getElementById("order");

const checkLetters = (event) => {
  let word = event.target.value?.toString();
  let wordIsLongEnough = word.length <= 4;

  if (wordIsLongEnough) {
    order.disabled = false;
  } else {
    order.disabled = true;
  }
};

name.addEventListener("change", checkLetters);

// Oppgave 8
const children = document.getElementsByClassName("children");
const color = document.getElementById("color");

const colorChildren = () => {
  const childNodes = Array.from(children[0].children);

  childNodes.forEach((value, index) => {
    if (index % 2 === 0) {
      value.style.border = "1px solid pink";
    } else {
      value.style.border = "1px solid green";
    }
  });
};

color.addEventListener("click", colorChildren);
