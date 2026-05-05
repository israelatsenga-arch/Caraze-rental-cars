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

// retrieving data from form
function calculateTotal() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let days = parseInt(document.querySelector("#days").value);
    let price = parseInt(document.querySelector("#rate").value);
    let car = document.querySelector("#car").value;

}
