let task = document.getElementById("task");
let pr = document.getElementById("pr");
let addBtn = document.getElementById("submit");
let taskList = document.getElementById("taskList");
let showCompleted = document.getElementById("completed");
let showPending = document.getElementById("pending");
let showAll = document.getElementById("all");


addBtn.addEventListener("click", () =>
    {
        let taskText = task.value; 

        if(taskText === "")
        {
            alert("Enter a task");
            return;
        }

    let li = document.createElement("li");
    let span = document.createElement("span");

    span.innerText = taskText + " (" + pr.value + ")";

    if(pr.value === "High")
    li.classList.add("pr-high")

    if(pr.value === "Medium")
    li.classList.add("pr-med")

    if(pr.value === "Low")
    li.classList.add("pr-low")

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Completed";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    completeBtn.onclick = () => {
        li.classList.toggle("completed");
    }

    deleteBtn.onclick = () => {
        li.remove();
    }

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    task.value = ""

})

showCompleted.onclick = () => {
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(jap => {
        if(jap.classList.contains("completed"))
        {
            jap.style.display = "flex";
        }

        else
        {
            jap.style.display = "none";
        }
    })
}

showPending.onclick = () => {
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(jap => {
        if(!jap.classList.contains("completed"))
        {
            jap.style.display = "flex";
        }

        else
        {
            jap.style.display = "none";
        }
    })
}

showAll.onclick = () => {
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(jap => {
        jap.style.display = "flex";
    })
}