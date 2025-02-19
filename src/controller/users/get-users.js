import fs  from 'fs';
const rawUserData = fs.readFileSync('src/db/users.json');
export const users = JSON.parse(rawUserData)
export const getUsers = (req, res) => {
    res.send(JSON.parse(rawUserData))
}