import {Request, Response} from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.send('users');
}