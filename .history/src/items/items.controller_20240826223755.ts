import { Controller, Get, Req } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'this is my first nation'; 
    }
}
