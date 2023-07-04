import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: true,
        },
      },
    }),
    AuthModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
