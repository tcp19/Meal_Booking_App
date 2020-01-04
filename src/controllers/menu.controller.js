import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

class menuController{
    static createMenu(req, res){
        res.status(201).json({
            'message':'menu created'
        })
    }
}

export default menuController;