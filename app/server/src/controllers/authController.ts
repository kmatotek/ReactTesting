import { Request, Response } from 'express';

//Promise is a built-in object used to handle asynchronous operations.
// A Promise exists in one of three states: 
// Pending (in progress), Fulfilled (successful), or Rejected (failed). 

export const login = async (req: Request, res: Response): Promise<void> => {
  // your login logic here
  res.json({ message: 'logged in' });
};
