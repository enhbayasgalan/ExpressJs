const express = require('express')
const app = express()
const port = 4000


const users=[
    {
    firstName: "zulaa",
    seconName: "boldoo"
    }
];

app.use(express.json())

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    // console.log(req.body);
    const {firstName, seconName} = req.body
    
    users.push({firstName, seconName})
    res.send(users)
})

app.delete('/users', (req, res)=> {
    console.log(req.body);
    
    const deleteElIndex = users.findIndex((user)=>user.firstName!==req.body.firstName);
   users.splice(deleteElIndex, 1)

    // console.log(deleteEl);  
    res.send(users)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})