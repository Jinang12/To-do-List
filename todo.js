var text = "";

function remove(button) {
    let buttonNumber = button.id.replace('btn', '');
    let listItem = document.getElementById("list" + buttonNumber);
    listItem.remove();
    button.remove();
    removeListeners();
}

function addInput(text) {
    let listElement = document.getElementById("list");
    if (listElement.children.length < 4) {
        let newLi = document.createElement("li");
        newLi.id = "list" + (listElement.children.length + 1);
        newLi.textContent = text;
        listElement.appendChild(newLi);

        let buttonContainer = document.getElementById("buttons");
        let newButton = document.createElement("button");
        newButton.className = "btn";
        newButton.id = "btn" + (listElement.children.length);
        newButton.textContent = "Remove";
        newButton.onclick = function() {
            remove(this);
        };
        buttonContainer.appendChild(newButton);
    } else {
        alert("Only 4 tasks are allowed!");
    }
}

function getInput() {
    let list = document.getElementById("list");
    if (list.children.length < 4) {
        let input = document.getElementById("text");
        text = input.value.trim();
        if (text !== "") {
            addInput(text);
            input.value = "";
        } else {
            alert("Task name cannot be empty!");
        }
    } else {
        alert("Only 4 tasks are allowed!");
    }
}

function removeListeners() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(button) {
        button.onclick = function() {
            remove(this);
        };
    });
}

removeListeners();