const title = document.querySelector("#todo");
const description = document.querySelector("#description");
const todos = document.querySelector("#todo-list");
const button = document.querySelector(".todo-btn");

// if(title.value === '' || description.value === '') {
//     alert("Please enter a vlid input!")
// }

    function disabledBtn(title,description){
        if(title && description && !(/^\s*$/.test(title)) && !(/^\s*$/.test(description))){
            button.removeAttribute("disabled");
        }
    }

    function createToDo(title, description){
        const card = document.createElement("div");
        card.classList.add('card','my-3');

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = title.value;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = description.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add('btn' ,'btn-danger','float-right', 'rounded-pill');
        deleteBtn.textContent = 'Delete';


        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);

        todos.appendChild(card);

    }

    
    function addToDo() {
        createToDo(title,description);
        
        title.value='';
        description.value='';
        
    }
    
    deleteBtn.addEventListener('click', () => {
        createToDo(title,description);
       

        title.value='';
        description.value='';
    });
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        addToDo();
    });

    
    // button.addEventListener('click', () => {
    //         const newDiv = document.createElement("div");
    //         newDiv.className("card text-white");
    //         newDiv.style.background-color = grey;
    // });