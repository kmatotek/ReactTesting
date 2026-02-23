import { Request, Response } from 'express';
import prisma from '../lib/prisma'

//Promise is a built-in object used to handle asynchronous operations.
// A Promise exists in one of three states: 
// Pending (in progress), Fulfilled (successful), or Rejected (failed). 

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await prisma.user.create({
        data: { email, password }
    });

    res.status(200).json(user);
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {email}
    });

    if(!user){
        res.status(404).json({ message: 'User not found!'})
        return;
    }

    res.status(200).json(user)
};
