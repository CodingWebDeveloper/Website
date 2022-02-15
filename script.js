let count = 1;
let productsStorage = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")):[];
let products = []

if(document.URL.includes("orderBook.html")){
    document.getElementById("icrement-count").addEventListener("click", function(){
        count++;
        document.getElementById("count").innerHTML = count;
        console.log(location.href);
    });
    
    document.getElementById("decrease-count").addEventListener("click", function(){
        if(count > 1){
            count--;
        }
        ;
        document.getElementById("count").innerHTML = count;
    });
    
    document.getElementById("add-to-cart").addEventListener("click", function(){
        let product = {
            "name": "Book Kylian Mbappe",
            "price": 19.95,
            "quantity": count,
        };
        console.log("added product");
        productsStorage.push(product);
        localStorage.setItem("products", JSON.stringify(productsStorage));
        
        products.push(product);
        count = 1;
        document.getElementById("count").innerHTML = count;
    });
}

if(document.URL.includes("cart.html")){
    window.onload = function(){
        const tableBuilder = (product) =>{
            const table = document.querySelector("tbody");
            const tr = document.createElement("tr");
            const tdName = `<td>${product["name"]}</td> \n`;
            const tdPrice = `<td>${product["price"]}€</td> \n`;
            const tdQuantity = `<td>${product["quantity"]} </td>\n`;
            tr.innerHTML =tdName + tdPrice + tdQuantity;
            table.appendChild(tr);
            }
        const getProducts = JSON.parse(localStorage.getItem("products"));
        if(getProducts !== null){
            var totalsum = 0;
            getProducts.forEach((product) => {
                if(product !== null){
                    tableBuilder(product);
                    totalsum = totalsum + Number(product["price"]) * Number(product["quantity"]);
                }
            });
            document.getElementById("total").textContent = `${Math.round(totalsum)}€`;
        }
       
    }
}
