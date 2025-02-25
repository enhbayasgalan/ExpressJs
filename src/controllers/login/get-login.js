import { users } from "../users/get-users.js"

export const Password = (req, res) => {
    const {Email, password} = req.body
    const user = users.find(
        (user) => user.Email == Email && user.password == password
    );
    const file = {message: "Successful", file:{firstName: user.firstName, lastName: user.lastName, Email: user.Email}}
    if (user) {
        res.status(200).send(file)
    } else {
        res.status(500).send("wrong password or secondName")
    }
}