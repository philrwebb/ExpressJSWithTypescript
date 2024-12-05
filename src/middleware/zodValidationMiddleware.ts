// src/middleware/zodValidationMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const zodValidationMiddleware =
  <T extends ZodSchema<any>>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parse and validate
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          message: 'Invalid request data',
          details: error.message,
        });
      } else {
        res.status(400).json({
          message: 'Invalid request data',
        });
      }
    }
  };
