document.addEventListener("DOMContentLoaded", function () {
  let btnDiv = document.createElement("div");
  btnDiv.className = "row justify-content-center mt-3";
  let squDiv = document.createElement("div");
  squDiv.className = "row m-3";
  document.body.appendChild(btnDiv);
  document.body.appendChild(squDiv);

  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.className = "button";
  button.appendChild(btnText);
  btnDiv.appendChild(button);

  let i = 1;

  let addSquareDiv = () => {
    let squareDiv = document.createElement("div");
    squareDiv.className = "blackSquare";
    squDiv.appendChild(squareDiv);
    squareDiv.id = i;
    let squarep = document.createElement("p");
    let squaretext = document.createTextNode(i);
    squarep.appendChild(squaretext);
    squareDiv.appendChild(squarep);
    squareDiv.addEventListener("click", function () {
      if (squareDiv.className === "blackSquare") {
        let randColor =
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ")";
        squareDiv.style.background = randColor;
      }
    });
    squareDiv.addEventListener("dblclick", function () {
      if (squareDiv.id % 2 === 0) {
        if (squareDiv.nextSibling === null) {
          alert("no more box  :(");
        } else {
          squDiv.removeChild(squareDiv.nextSibling);
        }
      } else {
        if (squareDiv.previousSibling === null) {
          alert("no more box  :(");
        } else {
          squDiv.removeChild(squareDiv.previousSibling);
        }
      }
    });
    i++;
  };

  button.addEventListener("click", addSquareDiv);
});
