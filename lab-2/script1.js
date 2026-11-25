
let titleElement = document.getElementById("title");
let descriptionElement = document.getElementById("description");
let dateElement = document.getElementById("date");
let submitElement = document.getElementById("addTodo");

let todoList = [];

let listToDoElement = document.getElementById("listTodo");

submitElement.addEventListener('click', function () {
    let title = titleElement.value;
    let description = descriptionElement.value;
    let date = dateElement.value;

    if (!title || !description || !date) {
        alert("Enter all values!");
        return;
    }

    todoList.push({
        title,
        description,
        date
    });

    titleElement.value = "";
    descriptionElement.value = "";
    dateElement.value = "";

    renderElement();
});

function renderElement() {
    listToDoElement.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let displayTitle = todoList[i].title;
        let displayDescription = todoList[i].description;
        let displayDate = todoList[i].date;

        let divElement = document.createElement("div");
        divElement.className = "todoItem";

        let titlePara = document.createElement("p");
        let descriptionPara = document.createElement("p");
        let datePara = document.createElement("p");

        titlePara.textContent = displayTitle;
        descriptionPara.textContent = displayDescription;
        datePara.textContent = displayDate;

        let removeElement = document.createElement("button");
        removeElement.textContent = "Remove";

        removeElement.addEventListener('click', function () {
            todoList.splice(i, 1);
            renderElement();
        });

        divElement.append(titlePara, descriptionPara, datePara, removeElement);

        listToDoElement.appendChild(divElement);
    }
}
