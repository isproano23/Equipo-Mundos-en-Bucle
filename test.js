saludar = function(){
    let cmpNombre;
    let nombre;
    let cmpApellido;
    let apellido;
    let saludo;
    let resultado;
    //recuperar el valor de la caja de texto
    cmpNombre = document.getElementById("txtNombre");
    nombre = cmpNombre.value;
    cmpApellido = document.getElementById("txtApellido");
    apellido = cmpApellido.value;
    
    saludo=generarSaludo(nombre,apellido);
    resultado=console.log(saludo);
    return saludo;
}