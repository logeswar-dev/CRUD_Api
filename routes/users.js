import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()

let users = []

router.get('/' , (req , res) => {
    res.send(users)
})

router.post('/' , (req , res) => {
    const user = req.body;

    const withUserId = { ...user , id : uuidv4()}

    users.push(withUserId);
    res.send("The User has been pushed" + user.name + "and the age of the user is" + user.age)
})

router.get('/:id', (req ,res) => {

    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);
     
    res.send(foundUser)
})

router.delete('/:id' , (req, res) => {
    const {id} = req.params;

    users = users.filter((user)=>{
        user.id !== id
    })

    res.send("user Id deleted " + id )
})

export default router;