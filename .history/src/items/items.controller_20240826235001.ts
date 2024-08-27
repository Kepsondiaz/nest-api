import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get
    findAllItem(): string {
        return 'this is the first item '
    }
}
