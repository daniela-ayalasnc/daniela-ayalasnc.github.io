const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("peligro");

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let advertencias = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let debeEnviar = false;

    if (nombre.value.length < 5) {
        advertencias += 'El nombre de usuario es demasiado corto. ';
        debeEnviar = true;
    }

    if (!regexEmail.test(correo.value)) {
        advertencias += 'El correo electrónico ingresado no es válido. ';
        debeEnviar = true;
    }

    if (contraseña.value.length < 8) {
        advertencias += 'La contraseña es demasiado corta. ';
        debeEnviar = true;
    }

    if (debeEnviar) {
        mensaje.innerHTML = advertencias;
    } else {
        mensaje.innerHTML = "Formulario enviado con éxito";
    }
});
