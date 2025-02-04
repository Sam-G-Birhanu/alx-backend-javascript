const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.set('Content-Type', 'application/json');
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(obj);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  if (!username) {
    res.status(404).send();
  } else {
    res.send(`Welcome ${username}`);
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
