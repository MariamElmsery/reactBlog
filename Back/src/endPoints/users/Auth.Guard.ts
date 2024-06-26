import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { InjectModel } from '@nestjs/mongoose';

  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, @InjectModel('users') private userModel) {}
 
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
    
      
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: 'secret'
          }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = await this.userModel.findOne({email:payload.email}).populate('posts');
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
 
    private extractTokenFromHeader(request: Request): string | undefined {
    //   const [type, token] = request.headers.authorization?.split(' ') ?? [];
    //   return type === 'Bearer' ? token : undefined;
  //  console.log(request.headers['jwttoken']);
   
   
    return request.headers['jwttoken'] as string|| undefined
    }
  }