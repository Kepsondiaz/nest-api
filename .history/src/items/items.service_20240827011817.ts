import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRe(User) private readonly userRepository: Repository<User>,
  ) {}
  create(createItemDto: CreateItemDto) {
    const items: Item = new Item();
    items.id = CreateItemDto.id;
    items.name = CreateItemDto.name;
    items.description = CreateItemDto.description;
    items.qtity = CreateItemDto.qtity;
    return 'This action adds a new item';
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
