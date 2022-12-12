const listItems = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];

  item.addEventListener("dragstart", () => {
    console.log("dragstart triggered");
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    list.addEventListener("dragleave", (e) => {
      list.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });

    list.addEventListener("dragenter", (e) => {
      e.preventDefault();
      list.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    });

    list.addEventListener("drop", function () {
      this.append(draggedItem);
      list.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
  }
}
