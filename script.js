const inputbox = document.getElementById("inputbox");
const addbutton = document.getElementById("addbutton");
const addtodolist = document.getElementById("addlist");

const addtodo = () => {
  const inputtext = inputbox.value;

  if (inputtext.length <= 0) {
    alert("Enter the to-do item");
    return;
  }

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputtext;
  li.appendChild(p);

  const edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.classList.add("editbtn");
  li.appendChild(edit);

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Remove";
  deletebtn.classList.add("deletebtn");
  li.appendChild(deletebtn);

  addtodolist.appendChild(li);

  inputbox.value = "";
};

const updatetodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    addtodolist.removeChild(e.target.parentElement)
  }
};

addbutton.addEventListener("click", addtodo);
addtodolist.addEventListener("click", updatetodo);



