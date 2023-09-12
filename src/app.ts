import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { userRoutes } from './routes/user.routes';
import { handleErrors } from './errors/handleErrors';
import { loginRoutes } from './routes/login.routes';
import { realEstateRoutes } from './routes/realEstate.routes';
import { categoriesRoutes } from './routes/categories.routes';
import { schedulesRoutes } from './routes/schedules.routes';


const app: Application = express();


app.use(express.json());

app.use("/users", userRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrors)

export default app;
