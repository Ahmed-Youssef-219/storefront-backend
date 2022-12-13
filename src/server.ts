import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import vars from './config';
import usersRouter from './routes/users';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';
import cors from 'cors';

const app = express();
const port = vars.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello, world :)');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

export default app;
