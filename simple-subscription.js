/*
    Simple product catalog with fixed pricing
*/
const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('/success', (req, res) => {
  res.send('Subscription success !!')
})
app.get('/cancel', (req, res) => {
  res.send('Subscription cancel !!')
})

app.listen(8000, () => {
  console.log('🚀  Server running on http://localhost:8000')
})
