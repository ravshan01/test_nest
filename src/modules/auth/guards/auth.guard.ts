import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const token = request.headers.authorization.split(' ')[1];
      const data = this.jwtService.verify(token);
      if (!data) return false;

      request.user = data;
    } catch (err) {
      switch (err.name) {
        case 'TokenExpiredError': {
          throw new UnauthorizedException();
        }
        case 'JsonWebTokenError': {
          throw new UnauthorizedException();
        }
        case 'NotBeforeError': {
          throw new UnauthorizedException();
        }
        default: {
          throw new UnauthorizedException();
        }
      }
    }

    return true;
  }
}
