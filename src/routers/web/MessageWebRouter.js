import express from 'express'
import { adminMiddleware } from '../../middleware/AdminMiddleware.js'
import MessageController from '../../controllers/web/MessageWebController.js'
import { createFakers } from '../../factories/MessageFactory.js';

const messageRouterWeb = express.Router();

messageRouterWeb.get('/', adminMiddleware, MessageController.getAll)

messageRouterWeb.get('/message-test', createFakers);

/* messageRouterWeb.get('/:id', MessageController.getById)

messageRouterWeb.post('/',  MessageController.save)

messageRouterWeb.delete('/:id', MessageController.deleteById)

messageRouterWeb.delete('/', MessageController.deleteAll) */

export {messageRouterWeb};