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
    let id = parseInt(document.querySelector("#id").value);
    let email = document.querySelector("#email").value;
    let days = parseInt(document.querySelector("#days").value);
    let price = parseInt(document.querySelector("#rate").value);
    let car = document.querySelector("#car").value;

    // validation of input
    if (!name || id <=0 || !email || !car || days <= 0 || price <= 0) {
        alert("Please fill in all the fields correctly");
        return;
    }
    // calculating total
    let total = days * price;

  // display result
  const resultBox = document.querySelector("#amount");
  resultBox.textContent = "Dear " + name + " you will need to pay a total of " + total + " please visit us at one of our branches so as to make the payment and get your luxurious car."

  const h1 = document.querySelector("h1")
  h1.textContent = "We look forward to seeing you.";
  
  // save to local storage
  let data = {
    name: name,
    email: email,
    days: days,
    price: price,
    car: car,
    total: total
  };
  localStorage.setItem("data", JSON.stringify(data));
}



// contact page
// event listener for send button in contact page
const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();
});