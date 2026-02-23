import { Request, Response } from 'express';
import { findUserByEmail, createUser } from '../repositories/userRepository';

//Promise is a built-in object used to handle asynchronous operations.
// A Promise exists in one of three states: 
// Pending (in progress), Fulfilled (successful), or Rejected (failed). 

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const existingUser = await findUserByEmail(email);

        if(existingUser){
            res.status(409).json({ message: "Email address already created" })
            return
        }

        const user = await createUser(email, password);

        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({ message: 'Server error'})
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user = await findUserByEmail(email);

        if(!user){
            res.status(404).json({ message: 'User not found!'})
            return;
        }

        if(password !== user.password){
            res.status(401).json({message: 'Invalid password'})
            return
        }

        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({ message: 'Server error'});
    }
};
