window.addEventListener("load", () => {
  if (document.querySelector(".previous-page-arrow")) {
    const backArrow = document.querySelector(".previous-page-arrow");
    backArrow.addEventListener("click", () => {
      history.back();
    });
  }
});
