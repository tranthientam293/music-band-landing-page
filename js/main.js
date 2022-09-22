// menu toggler
const btn = document.querySelector('[data-toggle="collapse"]');
const collapseSelector = btn.getAttribute("data-target");
const collapseTarget = document.querySelector(collapseSelector);

btn.addEventListener("click", function () {
  collapseTarget.classList.toggle("active");
  console.log(collapseTarget);
});

//Slider

const sliders = document.querySelectorAll(".slider-box");
index = 0;

function reset() {
  sliders.forEach(function (item) {
    item.style.display = "none";
  });
}

function showStartSlide() {
  reset();
  sliders[index].style.display = "block";
}

showStartSlide();

function implementSlide() {
  reset();
  sliders[index].style.display = "block";
  index++;
  if (index > sliders.length - 1) {
    index = 0;
  }

  setTimeout(implementSlide, 5000);
}
implementSlide();


// Modal
const modalTriggers = document.querySelectorAll('[data-toggle="buy-tickets"]');
const closeBtns = document.querySelectorAll('[data-toggle="dismiss"]');
const modal = document.querySelector(".modal");

for (let modalTrigger of modalTriggers) {
  modalTrigger.addEventListener("click", function () {
    const modalSelector = modalTrigger.getAttribute("data-target");
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
  });
}

for (let closeBtn of closeBtns) {
  closeBtn.addEventListener("click", function (event) {
    event.target.closest(".modal").classList.remove("show");
  });
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".modal")) {
    modal.classList.remove("show");
  }
});
