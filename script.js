const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.onclick = () => {
  const val = input.value.trim();
  if (!val) return;

  const li = document.createElement("li");
  li.textContent = val;

  li.onclick = () => li.classList.toggle("done");

  const del = document.createElement("button");
  del.textContent = "✖";
  del.className = "remove-btn";
  del.onclick = e => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
};



