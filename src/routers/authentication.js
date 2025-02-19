import express from 'express';

export const AuthenticationRouter = express.Router();

const valLoginInput = (req, res, next) => {
    const {email, password} = req.body
    console.log(req);
}

AuthenticationRouter.post('/login', )

AuthenticationRouter.get('/', (req, res) => {
    console.log(req);
    res.send('now working')
})