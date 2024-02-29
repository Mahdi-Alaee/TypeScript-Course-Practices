const form = document.getElementById("form") as HTMLFormElement;

//! functions
function searchAddressHandler(e: Event) {
  e.preventDefault();

  const textBox = document.getElementById('txtAddress') as HTMLInputElement;

  const enteredAddress = textBox.value;

  console.log(enteredAddress);
  
}

//! events
form.addEventListener("submit", searchAddressHandler);
