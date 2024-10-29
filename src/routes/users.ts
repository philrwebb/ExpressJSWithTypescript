import { Router } from 'express';
import { getUsers, getUserById, createUser } from '../handlers/users';

const router = Router();

// /api/users
router.get('/', getUsers);

// /api/users/125
router.get('/:id', getUserById);

// /api/users

router.post('/', createUser);

export default router;
