export let users = [];

export const getUsers = (req, res) => {
    res.send(users)
}