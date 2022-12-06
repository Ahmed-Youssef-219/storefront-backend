import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import envVars from './config';

const app = express();
const PORT = envVars.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world 8888 :)');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
