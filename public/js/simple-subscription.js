var stripe = Stripe('pk_test_1467k9kfdxzS2fpZN65aTIcz004es9Yp4b')

var checkoutButton = document.querySelector('#checkout-button')
checkoutButton.addEventListener('click', function () {
  stripe.redirectToCheckout({
    items: [{
      plan: 'plan_FxqnttN4iVOJqU',
      quantity: 1
    }],
    successUrl: 'http://localhost:8000/success',
    cancelUrl: 'http://localhost:8000/cancel'
  })
})