let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "3000",
            image: "images/white-tshirt.jpg"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "4900",
            image: "images/short-skirt.jpeg"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "3000",
            image: "images/sporty-smartwatch.jpg"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "2900",
            image: "images/knitted-top.jpeg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "12900",
            image: "images/black-leather-jacket.jpeg",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "3900",
            image: "images/pink-trousers.jpeg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "18900",
            image: "images/brown-jacket.jpeg",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "4900",
            image: "images/comfy-gray-pants.jpeg",
        },
    ],
};

for( let i of products.data) {
    // Create Card
    let card = document.createElement('div');

    // Card Should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");

    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");

    // product name
    let name = document.createElement('h5');
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    
    // price
    let price = document.createElement('h6');
    price.innerText = "Rs"+" "+ i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById('products').appendChild(card);

}

// Parameter passes from button (Parameter same as category)
function filterProduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innterText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        } else {
            button.classList.remove("active")
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");

    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if(value == 'all'){
            element.classList.remove("hide");
        }
        else{
            //checking if elements contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide")
            } else {
                //hide other elements
                element.classList.add("hide")
            }
        }
    })
}

// Search button click
document.getElementById("search")
.addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    })
})


// Initially display all products
window.onload = () => {
    filterProduct("all")
}