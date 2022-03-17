img = document.querySelector(".box_img");
btnImg = document.querySelector(".btn");
let data;
btnImg.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((json) => {
      data = json.image;
    });
  function randomImage(url) {
    img.setAttribute("src", url);
  }
  randomImage(data);
});
