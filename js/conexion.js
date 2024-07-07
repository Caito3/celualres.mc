
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
                // console.log(token)
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
                .then((response) => response.text())
                .then((result) => {
                    if(result){
                        console.log(result)
                    }
                    
                })
                .catch((error) => console.error(error));
        }    
}

email = "cualquiercosa@gmail.com";
password = "cualquiercosa123";

authBackend(email, password);
