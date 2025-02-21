import { createUser } from "../controller/users/create-user.js";
import { getUsers } from "../controller/users/get-users.js";
import { deleteElIndex } from "../controller/users/delete-users.js";
import express from 'express';
import { Password } from "../controller/login/get-login.js";

export const userRouter = express.Router(); 
userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.delete('/', deleteElIndex)
userRouter.get('/login', Password)