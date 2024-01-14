/* Что нам нужно?
Нужно, чтобы при нажатии кнопки "Показать все" показывались последние 2 элемента списка брендов

Для этого необходимо: 
1. Создать переменные, содержащие в себе: список брендов и саму кнопку, отвечающую за показ/скрытие элементов
2. Далее можно с помощью метода toggle удалять классы hidden для показа нужного количества элементов
3. Также нужно менять текст кнопки "Показать все" на "Скрыть" 
*/

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
