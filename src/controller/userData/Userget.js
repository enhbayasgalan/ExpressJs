import { Users } from "../../models/comment.model.js";


export const userGet = async (req, res) => {
    try {
        const userData = await Users.find({});
        res.send(userData).status(200);
    } catch (error) {
        console.log("Error occuded", error);
        res.send().status(400);
    }
};
