require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const { createSecretToken } = require('./util/SecretToken')
const bcrypt = require('bcrypt');

const { tempHoldingsModel, HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel')
const { UserModel } = require('./model/UserModel');

const { body, validationResult } = require("express-validator");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.post('/register',
  [
    body("username").isLength({ min: 3 }).withMessage("name must be at least 3 character long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("password must be at least 6 character long"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'email already registered' });
      }
      const newUser = new UserModel({ email, password: hashedPassword, username });
      const token = createSecretToken(newUser._id);
      res.cookie('token', token, {
        ...corsOptions,
        httpOnly: true,
      });
      await newUser.save();
      res.status(201).json({ message: "user register successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "server error1" });

    }

  }
);

app.post("/login", [
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({ min: 6 }).withMessage('password must be at least 6 length')

],
  async (req, res,) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "incorrect email or password" });

      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "incorect email or password" });
      }
      const token = createSecretToken(user._id);

      res.cookie('token', token, {
        ...corsOptions,
        httpOnly: true,
      });
      res.status(200).json({ message: "user logged in successfully", success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'server error' });

    }

  }
);

app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();

  res.send("order saved!");

})

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));



app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

