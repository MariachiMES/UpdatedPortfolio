var pagesArray = [
  "github.html",
  "portfolio.html",
  "resume.html",
  "bio.html",
  "contact.html",
];

var nextPage = function () {
  for (var i = 0; i < 5; i++) {
    document
      .querySelector(`#stripe${i}`)
      .addEventListener("click", openNewPage);

    function openNewPage(pagesArray) {
      window.open(pagesArray[i]);
      //   window.location.replace(pagesArray[i]);
      console.log(pagesArray[i]);
    }
  }
};
nextPage(pagesArray);

const deezNutz = ["nut1", "nut2"];
console.log(deezNutz);
