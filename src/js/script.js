import { ProgressBar } from "./ProgressBar";

const progBarDiv = document.querySelector('.progress-bars');
const redProgBar = new ProgressBar(0, 1, 17, 255, 0, 0);
const greenProgBar = new ProgressBar(0, 1, 17, 0, 255, 0);
const blueProgBar = new ProgressBar(0, 1, 17, 0, 0, 255);
const colorizeBtn = document.querySelector('.colorize-button')

progBarDiv.appendChild(redProgBar.element);
progBarDiv.appendChild(greenProgBar.element);
progBarDiv.appendChild(blueProgBar.element);

colorizeBtn.addEventListener('click', () => {
  const redVal = redProgBar.value * 15;
  const greenVal = greenProgBar.value * 15;
  const blueVal = blueProgBar.value * 15;
  const calculatedColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
  colorizeBtn.style.backgroundColor = calculatedColor;

})

