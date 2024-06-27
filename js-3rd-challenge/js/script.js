var button = document.querySelector(".got-this");
var model = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click",
  function () {
    model.classList.add("show-modal");
    button.innerText = "You've got this !!!";
});

modalX.addEventListener("click",
  function () {
    model.classList.remove("show-modal");
    button.innerText = "Who got this ?";
  });
