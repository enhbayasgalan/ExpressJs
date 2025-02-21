import express from "express";
import { userRouter } from "./routers/user-router.js";
import { productRouter } from "./routers/product-router.js";

import { connect } from "mongoose";
import { Users } from "./models/comment.model.js";
import { userGet } from "./controller/userData/Userget.js";


const url =
  "mongodb+srv://enhuush0109:8dUl2CL0pLVIeSpX@food-delivery.0eo91.mongodb.net/text?retryWrites=true&w=majority&appName=Food-Delivery";

const connectToDB = async () => {
  try {
    await connect(url);
    console.log("DB Connected");
  } catch (error) {
    console.log("error while connecting DB", error);
  }
};

connectToDB();

const app = express();
const port = 4000;

app.use(express.json());

app.get("/users", userGet)

app.post("/users", async (req, res) => {
    const {name} = req.body
    try {
        const newUser = await Users.create({
            name: name,
        });
        res.send(newUser).status(200)
    } catch (error) {
        console.log("Error occuded", error);
        res.send().status(400)
    }
})




app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
