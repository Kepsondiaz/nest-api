import { Module } from '@nestjs/common';
import { databaseProviders } from './dat';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}