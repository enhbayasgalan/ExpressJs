// import express from "express";
// import { createUser } from "../controller/users/create-user.js";

// export const AuthenticationRouter = express.Router();

// const loginUser = (req, res) => {
//   console.log("login controller working");
// };

// const valSignUpInput = (req, res, next) => {
//   console.log("middle ware running");
//   const { email, password } = req.body;
//   if (!email) {
//     res.status(400).json({ error: "Bad request", message: "Email request" });
//   } else if (!password) {
//     res.status(400).json({ error: "Bad request", message: "Password request" });
//   } else {
//     next();
//   }
//   console.log(req);
// };

// const valLoginInput = (req, res, next) => {
//     console.log('middle ware running');
//     const {email, password} = req.body;
//     if (!email) {
//         res.status(400).json({ error: "Bad request", message: "Email request"});
//     } else if (!password) {
//         res.status(400).json({ error: "Bad request", message: "Password request"})
//     } else {
//         next()
//     }
//     console.log(req);
// }

// AuthenticationRouter.post('/login', valLoginInput, loginUser)
// AuthenticationRouter.post("/sign-up", valSignUpInput, createUser);

// AuthenticationRouter.get("/", (req, res) => {
//   console.log(req);
//   res.send("now working");
// });
