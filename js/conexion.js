
//autenticacion para obtener los datos

async function authBackend(email, password){

    const AuthHeaders = new Headers();
    AuthHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: raw,
        redirect: "follow"
    };

    // let url = "http://localhost:3000/auth/register";
    let url = "https://grupo-13-node-js-backend-comisi-n-24131.vercel.app/auth/register";
    const response = await fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
                let token = JSON.parse(result).token
                console.log(token)
                if (result){
                    let products = getProducts(token)
                    if(products){
                        return products;
                    }
                }
        })
        .catch((error) => console.error(error));
}




async function getProducts(token){

        if(token){
            
            let url = "https://grupo-13-node-js-backend-comisi-n-24131.vercel.app/products";
            // let url = "http://localhost:3000/products";


            const myHeaders = new Headers();
            myHeaders.append("Authorization",  "Bearer " + token);

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            const response = await fetch(url, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if(result){
                        console.log(result)
                    }
                    mostrarProductos(result)
                })
                .catch((error) => console.error(error));
        }    
}

email = "cualquiercosa@gmail.com";
password = "cualquiercosa123";

authBackend(email, password);

//funcion para mostrar los productos

function mostrarProductos(result){

    //obtenemos el section donde se incluiran los productos
    var productos = document.getElementById("productos")
    
    //imagenes
    var foto = [
        './imagenes/Iphone11.png',
        './imagenes/Iphone11Pro.png',
        './imagenes/Iphone12.png',
        './imagenes/Iphone12Pro.png',
        './imagenes/s24.png',
        './imagenes/s22.png',
        './imagenes/motog42.png',
        './imagenes/s20.png',
        './imagenes/Iphone15.png',
        './imagenes/Iphone15Pro.png',
        './imagenes/s21.png',
        './imagenes/s22.png'
    ]

    // recorremos los productos y le aplicamos una funcion a cada uno de ellos
        var agregarProductos = result.map(function(info, num){

            //creamos el producto
            return  '<div class="producto">'
                        +`<img id="imagen" src=${foto[num]} class="imagen-producto" />`
                        +'<p class="titulo-prod">'+info.name+'<p>'
                        +'<p class="desc-prod">'+info.description+'</p>'
                        +'<p class="precio-prod">$'+info.price+'</p>'
                        +'<button class="boton-producto"> Ver mas </button>'
                    +'</div>';
            
        }).join('')
    //insertamos el producto en el section
    productos.innerHTML= agregarProductos;
    
}

