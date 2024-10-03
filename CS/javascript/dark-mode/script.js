function darkMode() {
    // Variable - A storage container data
    // Const - A keyword in JS that defines a variable that cannot change

    // Store the body tag in a variable
    const body = document.body;

    // Write the code to toggle the color of the body tag black and white
    // If the button is clicked and the screen is currently white...
    if (body.style.backgroundColor == "white")
    {
        //the screen should turn black
        body.style.backgroundColor = "black";
        // Change the text color to white
        body.style.color = 'white';
    } else { // Meaning the screen is currently not white
        // Change the screen color to white
        body.style.backgroundColor = "white";
        // Change the text color to black
        body.style.color = "black";
    }
}
