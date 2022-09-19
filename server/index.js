/*
    
*/

const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(cors())

const db = require('./models')

// Routers
const inventoryRouter = require('./routes/Inventory')
app.use("/inventory", inventoryRouter)

// Port server runs on
// Different than the port react runs on (React runs on 3000)
db.sequelize.sync().then(() => {    // When the server starts, checks if tables in db exist if not create them
    app.listen(3001, () => {    // Function that executes when the server starts
        console.log("Server running on port 3001")
    })
})
