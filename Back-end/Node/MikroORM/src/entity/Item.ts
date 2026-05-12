import { EntitySchema } from '@mikro-orm/core';

export interface Item {
  id: string;
  title: string;
  createdAt: Date;
}

export const ItemSchema = new EntitySchema<Item>({
  name: 'Item',
  tableName: 'items',
  properties: {
    id: { type: 'uuid', primary: true },
    title: { type: 'string' },
    createdAt: { type: 'datetime', fieldName: 'created_at' },
  },
});
