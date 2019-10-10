require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.SECRET_KEY)
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/charge', (req, res) => {
  let amount = 500

  stripe.customers
    .create({
      email: req.body.email,
      card: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      })
    )
    .then(charge => res.send(charge))
    .catch(err => {
      console.error('Error:', err)
      res.status(500).send({ error: 'Purchase Failed' })
    })
})

app.listen(8000, () => {
  console.log('🚀  Server running on http://localhost:8000')
})
