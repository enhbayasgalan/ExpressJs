import { Users } from "../../schemas/userSchema.js";

export const  createUser = async (req , res) => {
    const {name, password} = req.body;

    try{
        const newUser = await Users.create({
            name: name,
            password: password,
        });
        res.send(newUser).status(201);
    }catch(err){
        res.send(err).status(500);
    }
}