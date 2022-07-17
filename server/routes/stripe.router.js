const express = require('express');
const pool = require('../modules/pool');
const stripeRouter = express.Router();
const apiKey = require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_API_SECRET_KEY);
const YOUR_DOMAIN = 'http://localhost:3000';

stripeRouter.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1LMGrsB33WMXzL0LVrByXvkz',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});


module.exports = stripeRouter;