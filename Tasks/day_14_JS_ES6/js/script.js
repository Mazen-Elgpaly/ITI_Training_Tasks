"use strict";

const parentContainer = document.body;

function logMessage(msg = `hello user`) {
  console.log(`message is: ${msg}`);
}

logMessage`hello world`;

const newDivElement = document.createElement("div");

newDivElement.setAttribute("id", "demo");

newDivElement.classList.add("demo", "active");

newDivElement.classList.remove("active");

newDivElement.style.color = "blue";
newDivElement.style.cssText =
  "color: blue; background-color: lightgray; padding: 10px; margin: 10px;";

const textNode = document.createTextNode("Hello from Javascript");
newDivElement.appendChild(textNode);

parentContainer.appendChild(newDivElement);

newDivElement.remove();

parentContainer.removeChild(newDivElement);
