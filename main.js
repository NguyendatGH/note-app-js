inputHTML = document.getElementById("input-title");
inputHTML5 = document.getElementById("input-desc");
buttonHTML = document.getElementById("submit-btn");
taskListHTML = document.getElementById("tasks");




//create
buttonHTML.addEventListener("click", () => {

  const content = inputHTML.value.trim();
  if(content !== ""){
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

      <button id="highLight" class="star-btn" onclick="hightLightNote(this)">
      <i id="highLight_icon" class="fa-solid fa-star"></i>
      </button>
    </div>
      `;
    taskItem.classList.add("task");
    taskListHTML.appendChild(taskItem);
    console.log(taskItem);
    inputHTML.value = "";
    inputHTML5.value = "";
  }else{
    console.log("empty value!");
  }
 
});


//delete
const deleteNote = (button) => {
    const taskItem = button.closest(".task");
    taskItem.remove();
}


//highlight
const hightLightNote = (button) =>{
  const note = button.closest(".task");
  note.classList.toggle("highlighted_note");

}





