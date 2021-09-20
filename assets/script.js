const pagesArray = [
  "github.html",
  "portfolio.html",
  "resume.html",
  "bio.html",
  "contact.html",
];

var nextPage = function (pagesArray) {
  for (var i = 0; i < pagesArray.length; i++) {
    document
      .querySelector(`#stripe${i}`)
      .addEventListener("click", openNewPage);

    function openNewPage(pagesArray) {
      window.open(`${i}`);

      //   window.location.replace(pagesArray[i]);
    }
  }
};
nextPage(pagesArray);

const deezNutz = ["nut1", "nut2"];
console.log(deezNutz);
