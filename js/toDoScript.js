let $ = function(id) { return document.getElementById(id); };

// Declare Variable
let taskArray = [   "Plate-ify Wuthering Heights",
                    "Eat Lunch",
                    "Attend Meeting with Stephen King",
                    "Work on Novel",
                    "Plate-ify Diary"];
let errorTimer;
let errorFlashCount = 0;

window.onload = () => {
    $("addTask").addEventListener("click", addTask)
    $("removeTask").addEventListener("click", removeTask)
    fillSelectOptions();
    $("inputTasks").focus();
}

const addTask = () => {
    let task = $("inputTasks").value;
    task = task.trim();
    let isValid = true;

    if (task === "") {
        isValid = false;
        flashRed();
        errorTimer = setInterval(flashRed, 300);
    }

    if (isValid) {
        taskArray.push(task);
        $("inputTasks").value = "";
        fillSelectOptions();
    }

}

const removeTask = () => {
    let taskIndex = $("selectComplete").selectedIndex;
    taskArray.splice(taskIndex, 1);
    fillSelectOptions();
}

const fillSelectOptions = () => {
    $("listOfTasks").innerHTML = "";
    resetSelect();

    for (let i = 0; i < taskArray.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = taskArray[i];
        $("selectComplete").appendChild(option);
    }

    for (let i = 0; i < taskArray.length; i++) {
        currentTask = taskArray[i]
        $("listOfTasks").innerHTML += `<li>${currentTask}</li>`;
    }
}

const resetSelect = () => {
    let deadTasks = document.querySelectorAll('#selectComplete option');
    deadTasks.forEach(o => o.remove());
}

const flashRed = () => {

    if ((errorFlashCount % 2) === 0) {
        $("addTask").classList.remove("btn-primary");
        $("addTask").classList.add("btn-danger");
    }
    else {
        $("addTask").classList.remove("btn-danger");
        $("addTask").classList.add("btn-primary");
    }
    
    errorFlashCount++;

    if (errorFlashCount >= 4) {
        $("addTask").classList.remove("btn-danger");
        $("addTask").classList.add("btn-primary");
        errorFlashCount = 0;
        clearInterval(errorTimer);
    }
}