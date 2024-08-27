import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([It])]
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
