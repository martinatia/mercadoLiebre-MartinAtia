document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        if (!validarUsuario()) {
            event.preventDefault();
        }
        if(!validarContrasenia()){
            event.preventDefault();
        }
     
    });

    function validarUsuario() {
        var nombreInput = document.getElementById('usuario');
        var errorUsuario = document.getElementById('error_usuario');

        if (nombreInput.value.length < 2) {
            errorUsuario.textContent = 'El nombre debe tener al menos 2 caracteres.';
            return false;
        } else {
            errorUsuario.textContent = '';
            return true;
        }
    }
    function validarContrasenia() {
        var contraseniaInput = document.getElementById('contrasenia');
        var errorContrasenia = document.getElementById('error_contrasenia');

        if (contraseniaInput.value.length < 2) {
            errorContrasenia.textContent = 'El nombre debe de usuario debe tener al menos 5 caracteres.';
            return false;
        } else {
            errorContrasenia.textContent = '';
            return true;
        }
        
    }


});