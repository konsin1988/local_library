window.addEventListener("load", () => {
  const lockBtn = document.querySelectorAll(".lock");
  const pass = document.querySelector("#password");
  const confirmPass = document.querySelector("#confirm");

  lockBtn.forEach((item) => {
    item.addEventListener("mousedown", (event) => {
      item.previousSibling.type = "text";
    });
    item.addEventListener("mouseup", () => {
      item.previousSibling.type = "password";
    });
  });
});
