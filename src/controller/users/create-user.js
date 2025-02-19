import { users } from "./get-users.js"
import fs from 'fs'
export const  createUser =  (req , res) => {
    const {email, password} = req.body
    users.push({firstName, seconName})
    fs.writeFileSync("src/db/users.json", JSON.stringify(users))
    res.send(users)
}