document.getElementById("submitBtn").addEventListener("click", function() {
    
    var nom = document.getElementById("nom").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var genero = document.getElementById("genero").value; 
    var curso = document.getElementById("curso").value; 
    var opini = document.getElementById("opini").value; 
    

    
    if (edad < 16) {
        alert("Debes tener al menos 16 años para ingresar al curso.");
        return;
    }

    
    alert("¡Inscripción exitosa!\n\nNombre: " + nom + "\nEdad: " + edad + "\nCorreo: " + correo + "\nGénero: " + genero + "\nCurso: " + curso);
});
