function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
  if (li.innerHTML === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
}
