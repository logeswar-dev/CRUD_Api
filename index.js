import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());



app.use('/users' , userRoutes)

app.get('/' , (req , res) => {
    console.log("Test!")

    res.send("Hello From HomePage")
}
)

app.listen(PORT, () => {
    console.log("Server Running on the Port http://localhost:" + PORT)
})