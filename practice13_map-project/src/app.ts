const form = document.getElementById("form") as HTMLFormElement;

//! functions
function searchAddressHandler(e: Event) {
  e.preventDefault();

  const textBox = document.getElementById('txtAddress') as HTMLInputElement;

  console.log(textBox.value);
}

//! events
form.addEventListener("submit", searchAddressHandler);
