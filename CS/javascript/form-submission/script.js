document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('my form');

    form.addEventListener('submit', function(event){
        event.preventDefault();


        const name =document.getElementById('name').value
        const email =document.getElementById('email').value
        const message =document.getElementById('message').value


        if (name && email && message) {
            alert(`form submitted succesfully.\nName: ${name} \nEmail: ${email} \nMessage ${message}`);
        } else {
            alert ('Please fill all');
        }
    });
})
