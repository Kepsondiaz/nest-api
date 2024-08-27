import { Controller, Get, Req } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'this is my first nation'; 
    }
}
