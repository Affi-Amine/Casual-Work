const title = document.querySelector("#todo");
const description = document.querySelector("#description");
const button = document.querySelector(".todo-btn");
const form = document.querySelector("form");
//const deleteBtn = document.createElement("button");
//deleteBtn.classList=["btn","btn-danger"," float-right"," rounded-pill"];

// if(title.value === '' || description.value === '') {
//     alert("Please enter a vlid input!")
// }

/**Function to test if a string is composed by only spaces */
// function isWhitespace(str) {

//   return /^\s*$/.test(str);
// }

const todo_list = document.querySelector("#todo_list");

/**
 * A function that creates a todo task with the input the input values the user enters
 * @param {*} title : the task's title
 * @param {*} description : the task's description
 */
function createToDo(title, description) {
  const todoValue = title.value;
  const descriptionValue = description.value;

  if (todoValue === "" || descriptionValue === "") {
    alert("Please enter a valid input!");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("card", "my-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title.value;
  //cardTitle.style.textAlign = "center";

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = description.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "float-right", "rounded-pill");
  deleteBtn.innerHTML = "Delete";

  // let listItem = document.createElement("li");
  // const checkbox = document.createElement('input');
  // checkbox.type = "checkbox";
  // checkbox.value = task;
  // checkbox.name = task;
  // listItem.appendChild(checkbox);
  // listItem.appendChild(cardText);

  deleteBtn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    todo_list.removeChild(card);
  });

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(deleteBtn);

  card.style.color = "black";
  card.appendChild(cardBody);

  todo_list.appendChild(card);

  //title.value='';
  //description.value='';
}

/**
 * A function that adds the task to the left of the screen
 */
function addToDo() {
  //const title=document.querySelector("#todo");
  //const description=document.querySelector("#description");

  createToDo(title, description);

  todo.value = "";
  description.value = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addToDo();
});
