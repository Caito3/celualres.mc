
let url = 'https://grupo-13-node-js-backend-comisi-n-24131.vercel.app/products'

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "email": "mvazquezmultimedia@gmail.com",
    "password": "admin123"
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("https://grupo-13-node-js-backend-comisi-n-24131.vercel.app/auth/register", requestOptions)
    .then((response) => response.json())
    .then((result) => autenticar(result))
    .catch((error) => console.error(error));

    
    function autenticar(result){
    
        const myHeadersProducts = new Headers();
        let token = result.token
        console.log(token)

        myHeadersProducts.append("Authorization", "Bearer" + token );

        console.log(myHeadersProducts)
const requestOptions = {
    headers: myHeadersProducts,
    redirect: "follow",
    mode : "no-cors"
};

fetch("https://grupo-13-node-js-backend-comisi-n-24131.vercel.app/products", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}