// event listener after clicking button
button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();
});

// Fill form when user clicks a car
function fillForm(car, rate) {
  document.querySelector("#car").value = car;
  document.querySelector("#rate").value = rate;

  // Save selected car immediately
  localStorage.setItem("car", car);
  localStorage.setItem("rate", rate);
}

