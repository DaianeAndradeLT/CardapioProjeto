const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-counter")
const addressInput = document.getElementById("address-warn")

let cart= [];

// Abrir modal do carrinho
cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex"
    })

//Fechar modal do carrinho quando clicar fora
cartModal.addEventListener("click", function (event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Fechar modal do carrinho quando clicar no botão de fechar
closeModalBtn.addEventListener("click", function () {
    cartModal.style.display = "none"
})
// Identificar item ao carrinho
menu.addEventListener("click", function (event) {
    let parentButtom = event.target.closest(".add-to-cart-btn")

    if (parentButtom) {
        const name = parentButtom.getAttribute("data-name")
        const price = parseFloat(parentButtom.getAttribute("data-price"))
        addToCart(name, price)

    }
})

// Adicionar item ao carrinho
function addToCart(name, price){


    cart.push({
        name,
        price,
        quantity: 1,
    })
}