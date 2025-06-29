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

let orderArray = [];



productListData.forEach(card => {
    const cardsContainer = document.createElement('div');

    cardsContainer.innerHTML = `
       <div
            class="active:border-2 active:border-blue-900 rounded-lg relative flex w-full items-center justify-center">
            <img class="rounded-lg" src="${card.image.desktop}" alt="">

            <div
                class="cartText h-12 cursor-pointer flex absolute items-center active:border-2 shadow active:border-blue-900 justify-center w-2/3 bg-white rounded-full py-3 gap-2">
                <img src="/assets/images/icon-add-to-cart.svg" alt="">
                <p class="font-semibold text-sm">Add to Cart</p>

            </div>

            <div onclick = "handleIncre(${card})"
                class="increDecre hidden h-12 cursor-pointer text-white flex absolute items-center active:border-2 shadow active:border-blue-900 justify-between w-2/3 bg-red-600 rounded-full py-3 px-6 gap-2">
                <img   class=" decrementBtn border-[1px] border-white p-2 rounded-full" src="/assets/images/icon-decrement-quantity.svg" alt="">
                <p class = "cartTextValue" >0</p>
                <img  class="incrementBtn border-[1px] border-white p-2 rounded-full" src="/assets/images/icon-increment-quantity.svg" alt="">
            </div>

        </div>
                    
        <div class="mt-6 leading-snug">
            <p class="text-sm font-lighter text-slate-600">${card.name}</p>
            <h2 class="font-semibold">${card.category}</h2>
            <p class="font-semibold text-red-500">$${card.price.toFixed(2)}</p>
        </div> 
    `;


    const cartText = cardsContainer.querySelector('.cartText');
    const increDecre = cardsContainer.querySelector('.increDecre');

    const emptyCart = document.querySelector('.emptyCart');
    const ordersDetails = document.querySelector('.ordersDetails');



    generalContainer.appendChild(cardsContainer)
});


function handleIncre(card) {
    if (!orderArray.includes(card)) {
        orderArray.push(card);

    }
}

    const removeFromCart = orderArray.querySelector('.cancelBtn');
    removeFromCart.forEach(cancel => {
        cancel.addEventListener('click', () => {
            cancel.classList.toggle('hidden');
        });
    });


    const cartTextValue = document.querySelectorAll('.cartTextValue');




    //decrement & increament
    let value = new Array(cartTextValue.length).fill(0);

    const decrementBtn = document.querySelectorAll('.decrementBtn');
    const incrementBtn = document.querySelectorAll('.incrementBtn');

    decrementBtn.forEach((decrease, index) => {
        decrease.addEventListener('click', () => {
            if (value[index] > 0) {
                value[index]--;
                cartTextValue[index].textContent = value[index];
                cartTotal()
            }
        });
    });

    incrementBtn.forEach((increase, index) => {
        increase.addEventListener('click', () => {
            value[index]++;
            cartTextValue[index].textContent = value[index];
            cartTotal()
        })
    });


    const trackOrder = document.querySelector('.trackOrder');
    function cartTotal() {
        const total = value.reduce((prev, next) =>
            prev + next, 0
        );
        trackOrder.textContent = `(${total})`;
        return total
    }

    console.log(cartTotal())








    cartText.addEventListener('click', () => {
        cartText.classList.add('hidden');
        increDecre.classList.remove('hidden');

        if (!orderArray.includes(card)) {
            orderArray.push(card);


            const ordersDetails = document.querySelector('.ordersDetails');

            orderArray.forEach(orderItems => {
                const savingYou = document.querySelector('.savingYou');

                savingYou.innerHTML += `
            <div class="orderInner ordered flex justify-between items-center border-b-[1px] border-rose-200 py-5 ">
             <div class="flex gap-2 flex-col">
                <div class="font-bold text-md">${orderItems.name}</div>
                <div class="flex gap-2 items-center justify-center">
                    <p class="text-red-400 font-bold">0</p>
                    <p class="text-sm text-rose-300">@${orderItems.price}</p>
                    <p class="text-rose-300 font-bold">$${orderItems.price}</p>
                </div>
            </div>

            <div class="cancelBtn h-5 w-5 flex text-blue-900 items-center justify-center cursor-pointer 
                                    border-[1px] rounded-full hover:border-red-600 border-rose-500 
                                    hover:filter hover:brightness-50"><img class="" src="/assets/images/icon-remove-item.svg" alt=""></div>
            </div>
`;
                ordersDetails.prepend(savingYou);

            });

        }

        if (emptyCart && ordersDetails) {
            emptyCart.classList.add('hidden');
            ordersDetails.classList.remove('hidden');
        }

    });




//Review later

//     cartText.addEventListener('click', () => {
//         cartText.classList.add('hidden');
//         increDecre.classList.remove('hidden');

//         if (!orderArray.includes(card)) {
//             orderArray.push(card);


//             const ordersDetails = document.querySelector('.ordersDetails');

//             orderArray.forEach(orderItems => {
//                 const savingYou = document.querySelector('.savingYou');

//                 savingYou.innerHTML += `
//             <div class="orderInner ordered flex justify-between items-center border-b-[1px] border-rose-200 py-5 ">
//              <div class="flex gap-2 flex-col">
//                 <div class="font-bold text-md">${orderItems.name}</div>
//                 <div class="flex gap-2 items-center justify-center">
//                     <p class="text-red-400 font-bold">0</p>
//                     <p class="text-sm text-rose-300">@${orderItems.price}</p>
//                     <p class="text-rose-300 font-bold">$${orderItems.price}</p>
//                 </div>
//             </div>

//             <div class="cancelBtn h-5 w-5 flex text-blue-900 items-center justify-center cursor-pointer 
//                                     border-[1px] rounded-full hover:border-red-600 border-rose-500 
//                                     hover:filter hover:brightness-50"><img class="" src="/assets/images/icon-remove-item.svg" alt=""></div>
//             </div>
// `;              
//                 ordersDetails.prepend(savingYou);
        
//             });

//         }

//         if (emptyCart && ordersDetails) {
//             emptyCart.classList.add('hidden');
//             ordersDetails.classList.remove('hidden');
//         }

//     });



// const removeFromCart = orderArray.querySelector('.cancelBtn');
//     removeFromCart.forEach(cancel => {
//         cancel.addEventListener('click', () =>{
//             cancel.classList.toggle('hidden');  
//         });
//     });
































































