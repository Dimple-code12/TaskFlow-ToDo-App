// Selecting HTML elements


const taskinput = document.getElementById("taskinput");
const addbutton = document.getElementById("addbutton");
const tasklist = document.getElementById("tasklist");

addbutton.addEventListener("click", function() {
    const task = taskinput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const delbutton = document.createElement("button");
    delbutton.textContent = "Delete";

    delbutton.onclick = function() {
        li.remove();
    };

    li.appendChild(delbutton);
    tasklist.appendChild(li);
    taskinput.value = "";
    
});


