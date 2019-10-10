/*
   Dynamic product catalog and pricing
*/
require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.SECRET_KEY)
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/success', (req, res) => {
  res.send('Dynamic purchase success !!')
})
app.get('/cancel', (req, res) => {
  res.send('Dynamic purchase cancel !!')
})

app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'T-shirt',
        description: 'Comfortable cotton t-shirt',
        images: ['https://example.com/t-shirt.png'],
        amount: req.body.amount,
        currency: 'usd',
        quantity: 1
      }
    ],
    success_url:
      'http://localhost:8000/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:8000/cancel'
  })
  res.send({ sessionId: session.id })
})

app.listen(8000, () => {
  console.log('🚀  Server running on http://localhost:8000')
})
