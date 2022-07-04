import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const payload = `${req.method} ${req.baseUrl}   ${new Date().toISOString()}`;
    console.log(payload);
    next();
  }
}
