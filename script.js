const slider = document.querySelector(".slider");
const before = slider.querySelector(".before");
const beforeImg = before.querySelector("img");
const change = slider.querySelector(".change");
const changeCircle = change.querySelector(".circle");
const body = document.body;

let isActive = false;

const active = () => {
  isActive = true;
  change.style.backgroundImage = "linear-gradient(rgb(0 237 152), #00bcd4)";
  changeCircle.style.backgroundImage =
    "linear-gradient(rgb(0 237 152), #00bcd4)";
  changeCircle.style.cursor = "grabbing";
};
const noActive = () => {
  isActive = false;
  change.style.backgroundImage = "linear-gradient(rgb(0 43 77), #00bcd4)";
  changeCircle.style.backgroundImage = "linear-gradient(rgb(0 43 77), #00bcd4)";
  changeCircle.style.cursor = "grab";
};

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
  active();
  pauseEvents(e);
});

slider.addEventListener("mouseup", () => {
  noActive();
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

slider.addEventListener("touchstart", (e) => {
  active();
});
slider.addEventListener("touchend", (e) => {
  noActive();
});
slider.addEventListener("touchcencel", (e) => {
  isActive = false;
});
slider.addEventListener("touchmove", (e) => {
  if (!isActive) {
    return;
  }
  let x;
  for (let i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});
