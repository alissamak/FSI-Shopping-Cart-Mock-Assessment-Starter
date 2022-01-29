//recall plus and minus buttons from html
let plusBtn = document.querySelector('#quantity-up')
let minusBtn = document.querySelector('#quantity-down')

//define quantity and price
let quantity = 1
let price = 15.00

//display total quantity
function updateQuant(displayQuant){
    let totalQuantity = document.querySelector('.total-quantity')
    totalQuantity.textContent = displayQuant
}
//display total price
function updatePrice(displayPrice){
    let totalPrice = document.querySelector('.total-price')
    totalPrice.textContent = displayPrice
}

//create click event buttons for plus and minus
plusBtn.addEventListener('click', function(){
    quantity = quantity + 1
    price = price + 15.00
    updateQuant(`Quantity: ${quantity}`)
    updatePrice(`Total Price available at checkout ${price.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)
})

minusBtn.addEventListener('click', function(){
    if(quantity > 1){ //prevents from going less than 1
        quantity = quantity - 1
        price = price - 15.00
        updateQuant(`Quantity: ${quantity}`)
        updatePrice(`Total Price available at checkout ${price.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)
    }
})

//remove button
let removeBtn = document.querySelector('.remove')
removeBtn.addEventListener('click', function(){
    quantity = 1
    price = 15.00
    updateQuant(`Quantity: ${quantity}`)
    updatePrice(`Total Price available at checkout ${price.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)
})


