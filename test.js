saludar = function(){
    let cmpNombre;
    let nombre;
    let cmpApellido;
    let apellido;
    let saludo;

    //recuperar el valor de la caja de texto
    cmpNombre = document.getElementById("txtNombre");
    nombre = cmpNombre.value;
    cmpApellido = document.getElementById("txtApellido");
    apellido = cmpNombre.value;

    generarSaludo(nombre,apellido);
    return saludo;
}