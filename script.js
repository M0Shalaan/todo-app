window.onload = () => {
  const form1 = document.querySelector("#addForm");
  var items = document.getElementById("items");
  let submit = document.getElementById("submit");
  let editItem = null;
  form1.addEventListener("submit", addItem);
};
// if(localStorage.getItem("items")===null){
//     items = JSON.parse(localStorage.getItem("items"));

// }else{
//     items=[{}]
// }

function addItem(e) {
  e.preventDefault();
  if (submit.value != "Submit") {
    console.log("Test");
    editItem.target.parentNode.childNodes[0].data =
      document.getElementById("item").value;
    submit.value = "Submit";
    document.getElementById("item").value = "";
    document.getElementById("lblSuccess").innerHTML =
      "Text edited successfully";
    document.getElementById("lblSuccess").style.display = "block";
    localStorage.setItem("info", items);
    setTimeout(function () {
      document.getElementById("lblSuccess").style.display = "none";
    }, 3000);
    return false;
  }
  let newItem = document.getElementById("item").value;
  if (newItem.trim() == "" || newItem.trim() == null) {
    return false;
  } else {
    document.getElementById("item").value = "";
  }
  let li = document.createElement("li");
  li.className = "list-group-item";

  let deleteButton = document.createElement("button");
  deleteButton.className = "btn-danger btn btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("Delete"));
  let editButton = document.createElement("button");
  editButton.className = "btn-success btn btn-sm float-right edit";
  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  items.appendChild(li);
}
function displayList(anArray) {
  var content = "";
  for (var i = 0; i < anArray.length; i++) {
    content += `<ul><li>${i}</li></ul>`;
  }
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentNode;
      items = removeChild(li);
      document.getElementById("lblSuccess").innerHTML =
        "Text deleted successfully";
      document.getElementById("lblSuccess").style.display = "block";

      setTimeout(function () {
        document.getElementById("lblSuccess").style.display = "none";
      }, 3000);
    }
  }
  if (e.target.classList.contains("edit")) {
    document.getElementById("item").value =
      e.target.parentNode.childNodes[0].data;
    submit.value = "EDIT";
    editItem = e;
  }
}
function toggleButton(ref, btnID) {
  document.getElementById(btnID).disabled = false;
}
