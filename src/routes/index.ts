import {Router} from 'express';
const router = Router();

import {getUsers} from '../controllers/index.controllers'

router.get('/users', getUsers);

export default router;