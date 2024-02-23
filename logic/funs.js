document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("correo");
    const errorMessage = document.getElementById("error-message");

    

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        // Expresión regular para validar el correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verifica si el valor ingresado en el campo de correo electrónico es válido
        if (!emailPattern.test(emailInput.value)) {
            errorMessage.textContent = "Valid email required";
            errorMessage.style.fontSize = "0.7em";
            errorMessage.style.display = "block";
            emailInput.style.backgroundColor = "#FFCACA"
            emailInput.style.borderColor = "#FF9A9A"
            emailInput.style.color = "red"
        } else {
            errorMessage.style.display = "none";
            emailInput.style.backgroundColor = "#ffff"
            emailInput.style.borderColor = "rgb(200, 200, 200)"
            emailInput.style.color = "black"
            window.location.href = "./subscript.html";
        }
    });
});