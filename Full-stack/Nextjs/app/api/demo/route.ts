import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    stack: 'Next.js App Router · Route Handler',
    time: new Date().toISOString(),
    hint: '同一进程内：页面可由浏览器请求此 JSON，也可在服务端 fetch（本示例用客户端演示）。',
  });
}
