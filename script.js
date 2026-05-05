// event listener after clicking button
const button = document.querySelector("#submit");
button.addEventListener("click", (event) => {
  // prevent form from refreshing page
    event.preventDefault();
    calculateTotal();
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
    let name = document.querySelector("#full-name").value;
    let email = document.querySelector("#email").value;
    let days = parseInt(document.querySelector("#days").value);
    let price = parseInt(document.querySelector("#rate").value);
    let car = document.querySelector("#car").value;

    // validation of input
    if (!name || !email || !car || days <= 0 || price <= 0) {
        alert("Please fill in all the fields");
        return;
    }
    // calculating total
    let total = days * price;

    // display result
    let resultText = '${full-name}, you have rented ${car} for ${days} days. Total cost = KES ${total}';
    document.querySelector("#amount").textContent = resultText;
}
