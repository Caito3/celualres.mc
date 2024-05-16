function Validar() {
    ValidarNombre()
    ValidarMail()
    ValidarTelefono()
    ValidarMensaje()
    ValidarFoto()
    ValidarCheckbox()
}
function ValidarNombre(){
    let nombre = document.getElementById("nombre").value 
    let aviso = document.getElementById("validarNombre")
    if (nombre == ""){
        aviso.style.display= "block"
    }
}
function ValidarMail(){
    let email = document.getElementById("email").value
    let aviso = document.getElementById("validarEmail")
    if (email== ""){
        aviso.style.display= "block"
    }
}

function ValidarTelefono(){
    let telefono = document.getElementById("telefono").value
    let aviso = document.getElementById("validarTelefono")
    if (telefono == ""){
        aviso.style.display= "block"
    }
}

function ValidarMensaje(){
    let mensaje = document.getElementById("mensaje").value
    let aviso = document.getElementById("validarMensaje")
    if(mensaje == ""){
        aviso.style.display= "block"
    }  
}

function ValidarFoto(){
    let foto = document.getElementById("imagen-campo").value
    let aviso = document.getElementById("validarImagen")
    if(foto == ""){
        aviso.style.display= "block"
    }
}

function ValidarCheckbox(){
    let checkbox = document.getElementById("checkbox").checked
    let aviso = document.getElementById("validarCheckbox")
    if (checkbox == false){
        aviso.style.display= "block"
    }
}

function cerrar (){
    let menu = document.getElementById("menu-barra")
    let nav = document.getElementById("nav-celu")
    let fondo = document.getElementById("fondo") 
    menu.style.display= "none"
    nav.style.display= "none"
    fondo.style.display= "none"
}