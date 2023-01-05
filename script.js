const slider = document.querySelector(".slider");
const before = slider.querySelector(".before");
const beforeImg = before.querySelector("img");
const change = slider.querySelector(".change");
const body = document.body;

let isActive = false;

document.addEventListener("DOMContentLoaded", () => {
  let width = slider.offsetWidth;
  beforeImg.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

slider.addEventListener("mousedown", (e) => {
  isActive = true;
  change.style.backgroundColor = "yellow";
  pauseEvents(e);
});

slider.addEventListener("mouseup", () => {
  isActive = false;
  change.style.backgroundColor = "crimson";
});
slider.addEventListener("mouseleave", () => {
  isActive = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

slider.addEventListener("touchstart", () => {
  isActive = true;
  console.log("touchstart");
});
slider.addEventListener("touchhend", () => {
  isActive = false;
  console.log("touchhend");
});
slider.addEventListener("touchcencel", () => {
  isActive = false;
  console.log("touchcencel");
});
slider.addEventListener("touchmove", (e) => {
  if (!isActive) {
    return;
  }
  let x;
  let i;
  for (let i = 0; e < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});