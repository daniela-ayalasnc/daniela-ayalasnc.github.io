
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("submitButton").addEventListener("click", function(event) {
          event.preventDefault();

          // Obtener los valores del correo y la contraseña
          var email = document.getElementById("emailInput").value;
          var password = document.getElementById("passwordInput").value;

          // Validar el correo electrónico
          if (!validarEmail(email)) {
            console.log("Error: Correo electrónico no válido");
            return;
          }

          // Validar la contraseña
          if (!validarPassword(password)) {
            console.log("Error: La contraseña debe tener al menos 8 caracteres");
            return;
          }

          // Si ambos son válidos, puedes enviar el formulario o realizar otras acciones
          console.log("Formulario enviado con éxito");
        });
      });

      // Función para validar el correo electrónico
      function validarEmail(email) {
        // Expresión regular simple para validar el formato del correo electrónico
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }

      // Función para validar la contraseña
      function validarPassword(password) {
        return password.length >= 8;
      }
