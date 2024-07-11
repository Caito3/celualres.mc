// Funcion para validar los campos
function Validar() {
    ValidarNombre()
    ValidarMail()
    ValidarTelefono()
    ValidarMensaje()
    ValidarFoto()
    ValidarCheckbox()
}

// Validar el nombre
function ValidarNombre(){
    let nombre = document.getElementById("nombre").value 
    let aviso = document.getElementById("validarNombre")
    if (nombre == ""){
        aviso.style.display= "block"
    }else if (nombre != ""){
        aviso.style.display= "none"
    }
}

// Validar email
function ValidarMail(){
    let email = document.getElementById("email").value
    let aviso = document.getElementById("validarEmail")
    if (email== ""){
        aviso.style.display= "block"
    } else if (email != ""){
        aviso.style.display ="none"
    }

}

// Validar telefono
function ValidarTelefono(){
    let telefono = document.getElementById("telefono").value
    let aviso = document.getElementById("validarTelefono")
    if (telefono == ""){
        aviso.style.display= "block"
    } else if (telefono != ""){
        aviso.style.display = "none"
    }
}

// Validar mensaje
function ValidarMensaje(){
    let mensaje = document.getElementById("mensaje").value
    let aviso = document.getElementById("validarMensaje")
    if(mensaje == ""){
        aviso.style.display= "block"
    } else if (mensaje != ""){
        aviso.style.display = "none"
    }
}

// Validar foto
function ValidarFoto(){
    let foto = document.getElementById("imagen-campo").value
    let aviso = document.getElementById("validarImagen")
    if(foto == ""){
        aviso.style.display= "block"
    } else if (foto != ""){
        aviso.style.display = "none"
    }
}

//Validar campo checkbox
function ValidarCheckbox(){
    let checkbox = document.getElementById("checkbox").checked
    let aviso = document.getElementById("validarCheckbox")
    if (checkbox == false){
        aviso.style.display= "block"
    } else if (checkbox == true ){
        aviso.style.display = "none"
    }
}

// llevar desde el logo a home

function logo () {
    location.href="./index.html"
}

// cerrar el menu hamburguesa
function cerrar (){
    let menu = document.getElementById("menu-barra")
    let nav = document.getElementById("nav-celu")
    let fondo = document.getElementById("fondo") 
    menu.style.display= "none"
    nav.style.display= "none"
    fondo.style.display= "none"
}

// abrir el menu hamburguesa
function abrirMenu(){
    let menu = document.getElementById("nav-celu")
    let fondo = document.getElementById("fondo")
    let barra = document.getElementById("menu-barra")

    menu.style.display= "block"
    fondo.style.display= "block"
    barra.style.display= "block"
}