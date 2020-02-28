import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";
import "reflect-metadata";

import userProduct from "./routes/product.routes";

const app = express();
createConnection();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/',userProduct);

app.listen(3000);
console.log('server on port', 3000);
