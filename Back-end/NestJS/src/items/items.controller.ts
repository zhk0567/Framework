import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@ApiTags('items')
@Controller('api/items')
export class ItemsController {
  constructor(private readonly items: ItemsService) {}

  @Get()
  @ApiOperation({ summary: '列表（依赖注入的 Service）' })
  @ApiResponse({ status: 200 })
  list(): ReturnType<ItemsService['findAll']> {
    return this.items.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: '创建（DTO + ValidationPipe）' })
  @ApiBody({ type: CreateItemDto })
  @ApiResponse({ status: 201, schema: { example: { item: { id: 'uuid', title: 'x', createdAt: '' } } } })
  @ApiResponse({ status: 400, description: '校验失败' })
  create(@Body() dto: CreateItemDto): { item: ReturnType<ItemsService['create']> } {
    return { item: this.items.create(dto) };
  }
}
