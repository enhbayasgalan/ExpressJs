import { users } from "../users/get-users"

export const Password = (req, res) => {
    const {secondName, password} = req.body
    const user = users.find(
        (user) => user.secondName == secondName && user.password == password
    );
    const file = {message: "Successful", file:{firstName: user.firstName, lastName: user.lastName, secondName: user.secondName}}
    if (user) {
        res.status(200).send(file)
    } else {
        res.status(500).send("wrong password or secondName")
    }
}