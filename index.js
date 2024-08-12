require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const PORT = 3000;

const JWT_SECRET = process.env.JWT_SECRET;
const PASSPHRASE = process.env.PASSPHRASE;
const paypalURL = "https://www.paypal.com/cgi-bin/webscr";
const cmd = "_xclick";
const business = "example@mail.com";
const item_name = "an item";
const item_number = 1;
const currency = "EUR";
const return_url = "http://localhost/success.php";
const cancel_url = "http://localhost/cancel.php";
const notify_url = "http://localhost/payment.php";

app.post('/paypal', (req, res) => {
  const { pass ,amount } = req.body;
  if (pass == PASSPHRASE) {
    if (amount > 0) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append("cmd", cmd);
      urlSearchParams.append("business", business);
      urlSearchParams.append("item_name", item_name);
      urlSearchParams.append("item_number", item_number);
      urlSearchParams.append("amount", amount);
      urlSearchParams.append("currency_code", currency);
      urlSearchParams.append("return", return_url);
      urlSearchParams.append("cancel_return", cancel_url);
      urlSearchParams.append("notify_url", notify_url);
      const queryString = paypalURL + "?" + urlSearchParams.toString();

      const token = jwt.sign({ queryString }, JWT_SECRET, {expiresIn: '10m'});
      res.json({ token });
    } else {
      res.status(400).send("Invalid amount");
    }
  } else {
    res.status(400).send("Invalid Password");
  }
});

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}
