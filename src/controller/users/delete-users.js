import { users } from "./get-users.js";

export const deleteElIndex = (req , res) => {
    console.log(req.body);
    
    const deleteElIndex = users.findIndex((user)=>user.firstName!==req.body.firstName);
   users.splice(deleteElIndex, 1)

    // console.log(deleteEl);  
    res.send(users)
}