var checkoutHandler = StripeCheckout.configure({
  // Publishable API key
  key: 'publishable-key-here',
  locale: 'auto'
})
var button = document.getElementById('buttonCheckout')
button.addEventListener('click', function (ev) {
  checkoutHandler.open({
    name: 'Sample Store',
    description: 'Example Purchase',
    token: handleToken
  })
})

function handleToken(token) {
  fetch('/charge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(token)
  })
    .then(response => {
      if (!response.ok) throw response
      return response.json()
    })
    .then(output => {
      console.log('Purchase succeeded', output)
      if (output.status === 'succeeded') {
        document.getElementById('shop').innerHTML = '<p>Purchase complete!</p>'
      }
    })
    .catch(err => {
      console.log('Purchase failed', err)
    })
}
