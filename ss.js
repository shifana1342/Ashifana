

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const output = document.getElementById("output");

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.className = "taskItem";
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });

    // Function to update output
    function updateOutput() {
        const tasks = document.getElementsByClassName("taskItem");
        output.textContent = `Total Tasks: ${tasks.length}`;
    }

    // Update output initially and whenever tasks are added or removed
    updateOutput();
    taskList.addEventListener("DOMNodeInserted", updateOutput);
    taskList.addEventListener("DOMNodeRemoved", updateOutput);
});