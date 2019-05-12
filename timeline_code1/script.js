"use strict";

window.addEventListener("DOMContentLoaded", loadSVG);
window.addEventListener("resize", calculateSizes);

function loadSVG() {
  //   console.log("Load the SVG");
  fetch("timelinefin.svg")
    .then(response => response.text())
    .then(svgdata => {
      //   document.querySelector("#svg_timeline").innerHTML = svgdata;
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

     calculateSizes();
    });
}


calculateSizes();

function calculateSizes() {
  let allDivs = document.querySelectorAll("#svg_timeline div");
  let allBoxes = document.querySelectorAll("#boxes g");

  allBoxes.forEach((box, i) => {
    fitRectangle(
      "#" + box.getAttribute("id") + " .HTML_placeholder",
      "#" + allDivs[i].getAttribute("id")
    );

    console.log(allDivs[i]);
  });
}


function fitRectangle(svgElement, htmlElement) {
   
 
  svgElement = document.querySelector(svgElement);
  htmlElement = document.querySelector(htmlElement);
  let rect = svgElement.getBoundingClientRect();

  htmlElement.style.left = rect.x + "px";
  htmlElement.style.top = rect.y + "px";

  htmlElement.style.width = rect.width + "px";
  htmlElement.style.height = rect.height +"px";

  console.log("what");

  
  }

  






 