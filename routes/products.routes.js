import { Router } from "express";
import { getAllProductsController } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.route("/").get(getAllProductsController);

export default productsRouter;
