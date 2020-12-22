const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.get('/' , (req , res) => {
    console.log("Test!")

    res.send("Hello From HomePage")
}
)

app.listen(PORT, () => {
    console.log("Server Running on the Port http://localhost:" + PORT)
})