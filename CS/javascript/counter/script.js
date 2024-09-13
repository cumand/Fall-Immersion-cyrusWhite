function counter() {
    // creates a variable with a ID counter-number
    counter_number = document.getElementById("counter-number");
    //adds one each time the button is clicked
    counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1;
}
