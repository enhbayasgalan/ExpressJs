import { users } from "./get-users.js"

export const createUser = (req , res) => {
    const {firstName, seconName} = req.body
    
    users.push({firstName, seconName})
    res.send(users)
}