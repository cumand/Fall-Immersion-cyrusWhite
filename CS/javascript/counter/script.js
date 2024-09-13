function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.

    // Create a var that stores the tag with ID counter-number
    counter_number = document.getElementById('counter-number');

    // Adds 1 to the number inside our tag
    counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1;
}
