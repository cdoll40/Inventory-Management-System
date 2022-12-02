/*
    
*/

const express = require('express');
const cors = require("cors");
const db = require('./models')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const app = express();

app.use(express.json())
app.use(cors())

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// Routers
const inventoryRouter = require('./routes/Inventory')
app.use("/inventory", inventoryRouter)
const loginRouter = require('./routes/Login')
app.use("/login", loginRouter)
const registerRouter = require('./routes/Register')
app.use("/register", registerRouter)
const historyRouter = require('./routes/History')
app.use("/history", historyRouter)
const imageRouter = require('./routes/Image')
app.use("/upload", imageRouter)

// Port server runs on
// Different than the port react runs on (React runs on 3000)
db.sequelize.sync().then(() => {    // When the server starts, checks if tables in db exist if not create them
    app.listen(3001, () => {    // Function that executes when the server starts
        console.log("Server running on port 3001")
    })
})


