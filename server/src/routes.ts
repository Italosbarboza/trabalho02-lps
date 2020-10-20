import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get('/menor-lance', classesControllers.show);
routes.post('/lance', classesControllers.create);

export default routes;