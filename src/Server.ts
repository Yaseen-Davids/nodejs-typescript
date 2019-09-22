import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import BaseRouter from './routes';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', BaseRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.get('*', (req: Request, res: Response) => {
//     res.sendFile('index.html', {root: viewsDir});
// });

// Export express instance
export default app;
