
      document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("submitButton").addEventListener("click", function(event) {
          event.preventDefault();
          var email = document.getElementById("emailInput").value;
          var password = document.getElementById("passwordInput").value;
          if (!validarEmail(email)) {
            console.log("Correo electrónico no válido");
            return;
          }
          if (!validarPassword(password)) {
            console.log("Password debe de ser mayor o igual a 8 caracteres");
            return;
          }
          console.log("inicio de sesion exitoso");
        });
      });

      function validarEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      function validarPassword(password) {
        return password.length >= 8;
      }
