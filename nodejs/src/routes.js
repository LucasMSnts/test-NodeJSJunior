import { Router } from 'express';

import ContactController from './app/controllers/ContactController';
import BillingController from './app/controllers/BillingController';
import ShippingController from './app/controllers/ShippingController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.post('/contacts', ContactController.store);
routes.post('/billings', BillingController.store);
routes.post('/shippings', ShippingController.store);

routes.post('/orders', OrderController.store);
routes.get('/orders/:id', OrderController.index);

export default routes;
