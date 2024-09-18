inputHTML = document.getElementById("input-title");
inputHTML5 = document.getElementById("input-desc");
buttonHTML = document.getElementById("submit-btn");
taskListHTML = document.getElementById("tasks");


// console.log("inputHTML");
// console.log("inputHTML5");
// console.log("buttonHTML");
// console.log("taskListHTML");



//create
buttonHTML.addEventListener("click", () => {
  console.log(inputHTML.value);
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
  <h3>${inputHTML.value}</h3>
  <p>
    ${inputHTML5.value}
  </p>
  <div class="btns">
    <button class="delete-btn" id="deleteButton" onclick="deleteNote(this)">
      <i class="fa-solid fa-trash"></i>
    </button>


    <button id="myButton"  class="star-btn">
    <i id="highLight" class="fa-solid fa-star"></i>
    </button>
  </div>
    `;
  taskItem.classList.add("task");
  taskListHTML.appendChild(taskItem);
  console.log(taskItem);
  inputHTML.value = "";
  inputHTML5.value = "";
});


//delete
const deleteNote = (button) => {
    const taskItem = button.closest(".task");
    console.log(taskItem);
    taskItem.remove();
}


//solid






