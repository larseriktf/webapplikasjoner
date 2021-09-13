const users = require("./util.js");

const userUl = document.getElementById("users");

// TODO: Hent HTML #id med getElementById
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterButton = document.getElementById("filter");
const usersList = document.getElementById("users");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene.
// Du kan bruke users importert over for å hente en liste med 10 brukere

const updateUsersList = (listOfUsers, filter = 0) => {
  usersList.innerHTML = "";

  if (listOfUsers.length === 0) {
    listOfUsers = users;
  }

  for (const user of listOfUsers) {
    const listItem = document.createElement("li");
    const idSpan = document.createElement("span");
    const nameSpan = document.createElement("span");
    const ageSpan = document.createElement("span");

    idSpan.innerHTML = user.id;
    nameSpan.innerHTML = user.name;
    ageSpan.innerHTML = user.age;

    listItem.append(idSpan, nameSpan, ageSpan);
    usersList.appendChild(listItem);
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearch = (event) => {
  const nameStr = event.target.value;
  let newList = [];

  for (const user of users) {
    const entryName = user.name.toLowerCase().normalize();
    const searchedName = nameStr.toLowerCase().normalize();

    if (entryName === searchedName) newList.push(user);
  }

  updateUsersList(newList);
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const handleFilter = () => {
  // Jeg rakk ikke denne :(
  // let ageFilter = parseInt(ageInput.value);
  // updateUsersList(users, ageFilter);
};

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
nameInput.addEventListener("input", handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener("click", handleFilter);

const main = () => {
  updateUsersList(users);
};

main();
