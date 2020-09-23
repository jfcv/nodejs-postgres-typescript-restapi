import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch(e) {
        console.log('our error', e);
        return res.status(404).json('Resource not found!');
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch(e) {
        console.log('our error', e);
        return res.status(404).json('Resource not found!');
    }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {name, email} = req.body;
        const response: QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        return res.status(200).json({
            message: 'User created successfully',
            body: {
                user: {
                    name,
                    email
                }
            }
        });
    }
    catch(e) {
        console.log('our error', e);
        return res.status(503).json('Service unavailable');
    }
}
/*
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try{

    }
    catch(e) {

    }
}
*/
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).json(`User ${id} deleted successfully`);
    }
    catch(e) {
        console.log('our error', e);
        return res.status(500).json('Internal server error');
    }
} 