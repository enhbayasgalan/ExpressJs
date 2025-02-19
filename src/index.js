import express from 'express';
import { userRouter } from './routers/user-router.js';
import { productRouter } from './routers/product-router.js';
import { AuthenticationRouter } from './routers/authentication.js';
const app = express()
const port = 4000



app.use(express.json())





app.use('/users', userRouter);
app.use('/authentication', AuthenticationRouter);
app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})