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
        return res.status(500).json('Internal Server Error');
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try{

    }
    catch(e) {

    }
}

/* export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try{

    }
    catch(e) {

    }
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try{

    }
    catch(e) {

    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try{

    }
    catch(e) {

    }
} */