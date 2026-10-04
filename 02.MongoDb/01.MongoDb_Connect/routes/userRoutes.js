import express from 'express';
import User from '../models/userModel';

const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {
    try {
        let getUserDataFromDb = await User.find();
         
        return res.status(200).json({
            message: 'success in fetching user!',
            userData: getUserDataFromDb,
            code: 200
        });

    } catch (error) {
        console.error('error in fetching user!');
        
        res.status(500).json({
            message: 'error in fetching user!',
            code: 500
        })
    }
})

export default userRoutes;