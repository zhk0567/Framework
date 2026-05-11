import { defineEventHandler } from 'h3';

export default defineEventHandler(() => ({
  ok: true,
  stack: 'Analog · Nitro (h3)',
  time: new Date().toISOString(),
}));
