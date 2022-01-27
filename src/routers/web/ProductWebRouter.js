import express from 'express'
import ProductController from '../../controllers/web/ProductController.js';
import { createFakers } from '../../factories/ProductFactory.js';

const productRouterWeb = express.Router();

productRouterWeb.get('/', ProductController.getAll);

productRouterWeb.get('/product-test', createFakers);

export { productRouterWeb };