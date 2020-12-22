import express from 'express'

const router = express.Router()

const users = [
    {
        name : "Logeswar",
        age : "21"
    }
]

router.get('/' , (req , res) => {
    res.send(users)
})

router.post('/' , (req , res) => {
    res.send("Request Recieved")
})

export default router;