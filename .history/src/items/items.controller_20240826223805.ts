import { Controller, Get, Req } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(@Req() _request: Request): string {
        return 'this is my first nation'; 
    }
}
