function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.

    // Create a variable called counter_number, store the tag with the id
    // 'counter-number' inside this variable
    counter_number = document.getElementById('counter-number');

    // Add 1 to the text of the tag
    counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1;
}
