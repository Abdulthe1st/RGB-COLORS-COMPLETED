// RGB Colors

document.getElementById("previewBtn").addEventListener("click", colorChange);

// function

function colorChange() {
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;

  console.log(r);

  // process

  document.getElementById("display").style.background = `rgb(${r}, ${g}, ${b})`;

  document.getElementById("rgb-t").innerHTML = `rgb(${r}, ${g}, ${b})`;
}

// Black btn

document.getElementById("blckbtn").addEventListener("click", blackColor);

function blackColor() {
  document.getElementById("display").style.background = `rgb(0, 0, 0)`;
  document.getElementById("rgb-t").innerHTML = `rgb(0, 0, 0)`;
}

// White btn

document.getElementById("whtbtn").addEventListener("click", whiteColor);

function whiteColor() {
  document.getElementById("display").style.background = `rgb(255, 255, 255)`;
  document.getElementById("rgb-t").innerHTML = `rgb(255, 255, 255)`;
}
