import express from 'express';

import { create, select } from '../controllers/controller.js';

const router = express.Router();

router.post('/create', create);

router.get('/select', select);



export default router;