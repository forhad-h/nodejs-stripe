
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY)

async function createCoupon() {

  const coupon = await stripe.coupons.create({
    percent_off: 25,
    duration: 'once',
    name: "TESTCOUPON"
  })

  return coupon;
}

async function retrieveCoupon() {
  const coupon = await stripe.coupons.retrieve('SoVOMTGj')
  return coupon
}

!( async () => {
  //console.log( await createCoupon() )
  console.log( await retrieveCoupon() )
})()
