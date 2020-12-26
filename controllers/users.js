import { v4 as uuidv4 } from 'uuid';

export const getUsers = (req , res) => {
    res.send(users)
}

export const createUser = (req , res) => {
    const user = req.body;

    const withUserId = { ...user , id : uuidv4()}

    users.push(withUserId);
    res.send("The User has been pushed" + user.name + "and the age of the user is" + user.age)
}

export const getUser = (req ,res) => {

    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);
     
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const {id} = req.params;

    users = users.filter((user)=>{
        user.id !== id;
    })

    res.send("user Id deleted " + id )
}

export const updateUser = (req , res) => {
    const {id} = req.params;

    const {name,age} = req.body;

    const user = users.find((user)=> { user.id === id})

    if(name){
        user.name = name;
    }

    if(age){
        user.age = age;
    }

    res.send(`changed ${id}`)
}
