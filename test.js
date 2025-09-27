saludar = function(){
    let cmpNombre;
    let nombre;
    let cmpApellido;
    let apellido;
    let saludo;
    let resultado;
    let encabezadoSaludo=document.getElementById("lblResultado")
    //recuperar el valor de la caja de texto
    cmpNombre = document.getElementById("txtNombre");
    nombre = cmpNombre.value;
    cmpApellido = document.getElementById("txtApellido");
    apellido = cmpApellido.value;
  

    saludo=generarSaludo(nombre,apellido);
    encabezadoSaludo.textContent=saludo
    resultado=console.log(saludo);
    return saludo;
}