
let url = 'https://grupo-13-node-js-backend-comisi-n-24131.vercel.app/products'

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
