import { users } from "./get-users.js"
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

export const  createUser =  (req , res) => {
    const {firstName, lastName, secondName, password} = req.body
    const id = uuidv4()
    const relax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (users.map((user)=> user.secondName).includes(secondName)) {
        res.send(`${secondName} use, find secondName`)
    } else {
        if (relax.test(password) == true) {
            users.push({id, firstName, lastName, secondName, password})
            fs.writeFileSync('src/db/users.json', JSON.stringify(users))
            res.send("like")
        } else {
            res.send('password ok')
        }
    }

    
    // users.push(req.body)
    // fs.writeFileSync("src/db/users.json", JSON.stringify(users))
    // res.send(users)
}