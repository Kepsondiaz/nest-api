import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findAll(@Req() request: Request): string {
        return 'item 1, 200'; 
    }

    @Get(':id')
    findOneItem(@Param() id: string): string {
        return `item numero ${id}`;
    }
}
