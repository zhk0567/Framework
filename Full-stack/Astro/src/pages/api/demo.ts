import type { APIRoute } from 'astro';
import { demoPayload } from '../../lib/demo-payload';

export const GET: APIRoute = () => {
  const body = JSON.stringify(demoPayload());
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
