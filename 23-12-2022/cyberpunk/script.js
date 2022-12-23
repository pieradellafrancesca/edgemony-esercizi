const qs = (element) => document.querySelector(element);

const onMouseHover = () => {
  setTimeout(() => {
    bodyEl.style.backgroundColor = "#000000";
    videoEl.controls = true;
    videoEl.play();
  }, 600);
};

const onMouseOut = () => {
  setTimeout(() => {
    bodyEl.style.backgroundColor = "#0f0f0f";
    videoEl.controls = false;
    videoEl.pause();
  }, 300);
};

const bodyEl = qs("body");
const videoEl = qs("video");

videoEl.addEventListener("mouseover", onMouseHover);
videoEl.addEventListener("mouseout", onMouseOut);
