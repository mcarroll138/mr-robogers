// Business Logic
function userInput(number) {
  let newArray = [];

  for (let i = 0; i <= number; i++) {
    let element = i.toString();
    if (element.includes("3")) {
      element = "Won't you be my neighbor?";
    } else if (element.includes("2")) {
      element = "Boop!";
    } else if (element.includes("1")) {
      element = "Beep!";
    }

    newArray.push(element);
  }

  return newArray;
}

// UI Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userNumber = document.getElementById("userNumber").value;
    if (userNumber < 0) {
      const resultDiv = document.getElementById("results");
      resultDiv.innerHTML = "Mr. Roboger only deals with positive numbers! Try again.";
      return;
    }
    const result = userInput(Number(userNumber));
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = result.join(", ");
  });
});
