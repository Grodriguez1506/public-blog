const listItem = document.querySelectorAll(".list-group-item");

if (listItem) {
  listItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
    });
    item.addEventListener("mouseout", () => {
      item.classList.remove("active");
    });
  });
}
