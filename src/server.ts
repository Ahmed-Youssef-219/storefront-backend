import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import envVars from './config';
import usersRouter from './routes/users';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';


const app = express();
const PORT = envVars.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world :)');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
