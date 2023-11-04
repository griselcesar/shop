import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use(morgan("dev"));

import clientsRoutes from "../routes/clients.routes.js";
import productsRouter from "../routes/products.routes.js";

app.use("/clients", clientsRoutes);
app.use("/products", productsRouter);

export default app;
