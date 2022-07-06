import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '7d' },
    }),
    ConfigModule.forRoot({ cache: true }),
  ],
  exports: [JwtModule, ConfigModule],
})
export class CoreModule {}
