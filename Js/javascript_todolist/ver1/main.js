let inputBox = document.getElementById("inputField");
let addToDo = document.getElementById("addToDo");
let toDoList = document.getElementById("toDoList");

addToDo.addEventListener("click", function () {
  var list = document.createElement("li");
  if (!inputBox.value) alert("내용을 입력해 주세요!");
  else {
    list.innerText = inputBox.value;
    toDoList.appendChild(list);
    inputBox.value = "";
  }

  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
  });
  list.addEventListener("dblclick", function () {
    toDoList.removeChild(list);
  });
});