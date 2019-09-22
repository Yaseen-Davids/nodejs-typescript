import { Request, Response, Router, NextFunction } from 'express';
import { port } from "../start";

// Init router and path
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", {
      port: port
    });
  }
  catch (err){
    return next(err);
  }
})

// Export the base-router
export default router;
