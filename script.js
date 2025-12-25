//TO-DO List

function addTask() {
    const taskInput = document.getElementById('task').value;
    const taskList = document.getElementById('taskList');

    if (taskInput.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskInput;

    taskList.appendChild(li);

    // Clear input after adding
    document.getElementById('task').value = "";
}


//Notes

function savenotes() {
    let notes = document.getElementById("notes").value;

    if (notes.trim() === "") {
        alert("Nothing to save");
        return;
    }

    localStorage.setItem("notes", notes);
    alert("Notes saved successfully");
}


//Theme

function toggletheme() {
  document.body.classList.toggle("dark");
}

//Calculator

let exp = "";

function press(val) {
  exp += val;
  document.getElementById("calcInput").value = exp;
}

function calculate() {
  try {
    let result = Function('"use strict";return (' + exp + ')')();
    document.getElementById("calcInput").value = result;
    exp = result.toString();
  } catch (error) {
    document.getElementById("calcInput").value = "Error";
    exp = "";
  }
}

function clearcalc() {
  exp = "";
  document.getElementById("calcInput").value = "";
}

function backspace() {
  exp = exp.slice(0, -1);
  document.getElementById("calcInput").value = exp;
}
