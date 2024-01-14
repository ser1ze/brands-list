let showMoreBtn = document.querySelector(".btn-container");
let text = document.querySelector(".btn__text");
let brandsTablet = document.querySelectorAll(".brands-list__brand--tablet");
let brandsDesk = document.querySelectorAll(".brands-list__brand");
let img = document.querySelector(".btn__img");

showMoreBtn.addEventListener("click", () => {
  brandsTablet.forEach((brand) => {
    brand.classList.toggle("show-tablet");
  });
  if (text.innerText == "Показать все") {
    text.innerText = "Скрыть";
  } else {
    text.innerText = "Показать все";
  }
  brandsDesk.forEach((brand) => {
    brand.classList.toggle("show-desktop");
  });
  changeImage(img);
});

function changeImage(img) {
  if (img.src.includes("expand1.svg")) {
    img.src = "assets/images/expand.svg";
  } else {
    img.src = "assets/images/expand1.svg";
  }
}
