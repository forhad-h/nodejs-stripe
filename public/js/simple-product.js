
/*
    Simple product catalog with fixed pricing
*/
var stripe = Stripe('publishable-key-here')
var checkoutButton = document.querySelector('#checkout-button')
checkoutButton.addEventListener('click', function () {
  stripe.redirectToCheckout({
    items: [
      {
        // to get 'sku' add product in stripe account dashboard
        sku: 'sku_FwEhYOP8NY6Eav',
        quantity: 1
      }
    ],
    successUrl: 'http://localhost:8000/success',
    cancelUrl: 'http://localhost:8000/cancel'
  })
})
