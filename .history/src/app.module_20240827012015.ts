import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'simform',
      username: 'postgres',
      entities: [User], // here we have added user enitity in entities array
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
