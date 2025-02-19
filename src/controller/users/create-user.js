import { users } from "./get-users.js"
import fs from 'fs'
export const  createUser =  (req , res) => {
    const {firstName, seconName} = req.body
    users.push({firstName, seconName})
    fs.writeFileSync("src/db/users.json", JSON.stringify(users))
    res.send(users)
}