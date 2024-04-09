window.addEventListener("load", () => {
  const submit_btn = document.querySelector(".submit-btn");
  const modal_window = document.querySelector(".modal");

  submit_btn.addEventListener("click", () => {
    modal_window.classList.remove("hidden");
    setTimeout(() => {
      modal_window.classList.add("hidden");
      window.location.assign("/");
    }, 3000);
  });
});
