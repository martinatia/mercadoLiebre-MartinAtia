document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        if (!validarNombre()) {
            event.preventDefault();
        }
        if(!validarNombreUsuario()){
            event.preventDefault();
        }
     
    });

    function validarNombre() {
        var nombreInput = document.getElementById('nombre');
        var errorNombre = document.getElementById('error_nombre');

        if (nombreInput.value.length < 2) {
            errorNombre.textContent = 'El nombre debe tener al menos 2 caracteres.';
            return false;
        } else {
            errorNombre.textContent = '';
            return true;
        }
    }
    function validarNombreUsuario() {
        var nombreInput = document.getElementById('nombre_usuario');
        var errorNombre = document.getElementById('error_nombre_usuario');

        if (nombreInput.value.length < 2) {
            errorNombre.textContent = 'El nombre debe de usuario debe tener al menos 5 caracteres.';
            return false;
        } else {
            errorNombre.textContent = '';
            return true;
        }
        
    }


});