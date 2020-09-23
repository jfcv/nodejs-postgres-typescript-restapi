import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'

export const getUsers = async (req: Request, res: Response) => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM users');
        console.log(response.rows);
        res.send('users');
    }
    catch(e) {
        console.log('our error', e);
    }
}