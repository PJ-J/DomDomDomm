document.addEventListener("DOMContentLoaded", function () {
  let btnDiv = document.createElement("div");
  let squDiv = document.createElement("div");
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
    i++;
  };

  button.addEventListener("click", addSquareDiv);

  let colorArray = [
    "#242582",
    "#41b3a3",
    "#c38d9e",
    "#E8a87c",
    "#85DCB0",
    "#e27d60",
    "#553d67",
    "#f64c72",
  ];

 

  squDiv.addEventListener("click", function (e) {
    if (e.target.className === "blackSquare") {
      let randColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
      e.target.style.background =
        randColor;
    }
  });

  squDiv.addEventListener("dblclick", function (e) {
    if (e.target.id % 2 === 0) {
      let clickedId = Number(e.target.id);
      let remove = document.getElementById(clickedId + 1);
      if (!remove) {
        alert("ain't no box here");
      } else {
        remove.remove();
      }
    } else {
      let clickedId = Number(e.target.id);
      let remove = document.getElementById(clickedId - 1);

      if (!remove) {
        alert("ain't no box here");
      } else {
        remove.remove();
      }
    }
  });
});