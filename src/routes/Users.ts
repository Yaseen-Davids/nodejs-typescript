import { Request, Response, Router, NextFunction } from 'express';

// Init shared
const router = Router();

router.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
        return next(err);
    }
});

router.post('/add', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
        return next(err);
    }
});

router.put('/update', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
        return next(err);
    }
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
        return next(err);
    }
});

export default router;
