import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { CreateItemDto } from './dto/create-item.dto';

export type Item = { id: string; title: string; createdAt: string };

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 'seed-1',
      title: '示例条目（内存存储，由 Service 维护）',
      createdAt: new Date().toISOString(),
    },
  ];

  findAll(): { items: Item[] } {
    return { items: [...this.items] };
  }

  create(dto: CreateItemDto): Item {
    const item: Item = {
      id: randomUUID(),
      title: dto.title.trim(),
      createdAt: new Date().toISOString(),
    };
    this.items.unshift(item);
    return item;
  }
}
