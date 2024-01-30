let signUp = document.getElementById("signUp")
let signIn = document.getElementById("signIn")
let nameInput = document.getElementById("nameInput")
let title = document.getElementById("title")

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signUp.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signUp.classList.add("disable");
}

function validarFormulario() {
    let nombre = document.getElementById('nameInput').value;
    let correo = document.getElementById('emailInput').value; 
    let contraseña = document.getElementById('passwordInput').value; 

    if(nombre === "" || correo === "" || contraseña === "") {
        alert('Por favor, rellena todos los campos.');
        return false;
    }
    return true;
}

document.getElementById('signUp').addEventListener('click', function() {
    if(validarFormulario()) {
        alert('Formulario enviado');
        window.location.href = 'index.html'; 
    }
});

document.getElementById('signIn').addEventListener('click', function() {
    if(validarFormulario()) {
        alert('Formulario enviado');
        window.location.href = 'index.html';
    }
});
