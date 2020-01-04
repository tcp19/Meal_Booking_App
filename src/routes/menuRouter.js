import { Router } from 'express';
import menuController from '../controllers/menu.controller';

const menuRouter =  Router()

menuRouter.post('/menu', menuController.createMenu);

export default menuRouter;