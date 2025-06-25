const productListData = [
    {
        "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
        },
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    }
]

const generalContainer = document.getElementById('generalContainer');

productListData.forEach(card => {
    const cardsContainer = document.createElement('div');

    cardsContainer.innerHTML = `
       <div
            class="active:border-2 active:border-blue-900 rounded-lg relative flex w-full items-center justify-center">
            <img class="rounded-lg" src="${card.image.desktop}" alt="">

            <div
                class=" hidden h-12 flex absolute items-center active:border-2 shadow active:border-blue-900 justify-center w-2/3 bg-white rounded-full py-3 gap-2">
                <img src="/assets/images/icon-add-to-cart.svg" alt="">
                <p class="font-semibold text-sm">Add to Cart</p>

            </div>

            <div
                class="h-12 text-white flex absolute items-center active:border-2 shadow active:border-blue-900 justify-between w-2/3 bg-red-600 rounded-full py-3 px-6 gap-2">
                <img class="border-[1px] border-white p-2 rounded-full" src="/assets/images/icon-decrement-quantity.svg" alt="">
                <p>0</p>
                <img class="border-[1px] border-white p-2 rounded-full" src="/assets/images/icon-increment-quantity.svg" alt="">
            </div>

        </div>
                    
        <div class="mt-6 leading-snug">
            <p class="text-sm font-lighter text-slate-600">${card.name}</p>
            <h2 class="font-semibold">${card.category}</h2>
            <p class="font-semibold text-red-500">$${card.price.toFixed(2)}</p>
        </div> 
    `
    generalContainer.appendChild(cardsContainer)
});






























































// productListData.forEach(card => {
//     //container for the card
//     const cardTemplate = document.createElement('div');
//     cardTemplate.className ='cardTemp';
//     cardTemplate.id = 'cardT';
//     //link to the parent
//     cardTemplate.append(imgCart);
//     cardTemplate.append(cardText);
//     // children  first
//     const imgCart = document.createElement('div');
//     imgCart.className = 'imgCartHolder';
//     imgCart.append(img);
//     imgCart.append(cart);
//     // first child too
//     const img = document.createElement('img');
//     img.className = 'imgs';

//     const cart = document.createElement('div');
//     cart.className = 'carts';
    

//     //children second

//     const cardText = document.createElement('cardText');
//     cardText.className = 'cardTex';
//     cardText.append(p1);
//     cardText.append(h);
//     cardText.append(p2);
    
//     // second child too
//     const p1 = document.createElement('p');
//     const h = document.createElement('h2');
//     const p2 = document.createElement('p');

//     p1.className = 'nam';
//     h.className = 'categ';
//     p2.className = 'pric';

//     // the function now

//     img.textContent = `${card.image.mobile}`;
//     cart.textContent = `url(.../)`

// });

