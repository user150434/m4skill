const products = [
    [
        "bruine tas",         
        30,                     
        "imgs/tas1.jpg",        
        "Mooie bruine tas",     
        true                    
    ],
    [
        "patrone tas",
        30,
        "imgs/tas2.webp",
        "Patroon design tas",
        false
    ],
    [
        "witte tas",
        30,
        "imgs/tas3.jpg",
        "Stijlvolle witte tas",
        true
    ]
];

const productContainer = document.querySelector('.product-container');
productContainer.innerHTML = ""; // Leegmaken

products.forEach(product => {
    const [naam, prijs, afbeelding, beschrijving, beschikbaar] = product;
    let cardHTML = `
        <div class="${beschikbaar ? 'product' : 'product-outofstock'}">
            <img src="${afbeelding}" alt="" class="product__img">
            <h2 class="product__price">$${prijs}</h2>
            <p class="product__productname">${naam}</p>
            <p class="product__beschrijving">${beschrijving}</p>
            <p class="product__rating">★★★★</p>
            ${
                beschikbaar
                ? `<button class="product__button">add</button>`
                : `<button class="product-outofstock__button" disabled>out of stock</button>`
            }
        </div>
    `;
    productContainer.innerHTML += cardHTML;
});





let cartCount = 0;
const badge = document.getElementById('js--cart-badge');
const addButtons = document.querySelectorAll('.product__button');
const removeBtn = document.getElementById('js--cart-badge__verwijder');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        badge.textContent = cartCount;
        badge.style.display = 'flex';
        removeBtn.style.display = 'inline-block'; // Show delete button
    });
});

removeBtn.addEventListener('click', () => {
    if (cartCount > 0) {
        cartCount--;
        badge.textContent = cartCount;
        if (cartCount === 0) {
            badge.style.display = 'none';
            removeBtn.style.display = 'none'; // Hide delete button
        }
    }
});