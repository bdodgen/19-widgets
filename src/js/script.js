import { ProgressBar } from "./ProgressBar";

const body = document.querySelector('body');
const redProgBar = new ProgressBar(0, 1, 17, 255, 0, 0);
const greenProgBar = new ProgressBar(0, 1, 17, 0, 255, 0);
const blueProgBar = new ProgressBar(0, 1, 17, 0, 0, 255);

body.appendChild(redProgBar.element);
body.appendChild(greenProgBar.element);
body.appendChild(blueProgBar.element);