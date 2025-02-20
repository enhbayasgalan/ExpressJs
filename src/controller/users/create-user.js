import { log } from "console"
import { users } from "./get-users.js"
import fs from 'fs'

export const  createUser =  (req , res) => {
    console.log("this is user controller", req.body);

    const {email, password} = req.body

    const hashedPassword = bcrypt.hashSync("test", saltRounds) 
    // users.push(req.body)
    // fs.writeFileSync("src/db/users.json", JSON.stringify(users))
    // res.send(users)
}