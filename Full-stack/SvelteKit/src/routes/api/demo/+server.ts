import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  return json({
    ok: true,
    stack: 'SvelteKit · Svelte 5',
    time: new Date().toISOString(),
  });
};
