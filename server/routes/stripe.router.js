const express = require('express');
const pool = require('../modules/pool');
const stripeRouter = express.Router();

const stripe = require('stripe')('sk_test_51LGqe5B33WMXzL0L8hfF4To9JilzqeN1SPcclSVl7XzkwOrEsbFwjfjPTbYlFKGgrKWzOQOWbKlh6qKiqobbJkHw00MFaY4ff6');
const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
  
    res.redirect(303, session.url);
  });


module.exports = stripeRouter;