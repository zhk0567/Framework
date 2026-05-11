export function loader(): Response {
  return Response.json({
    ok: true,
    stack: 'React Router 7（Remix 官方演进栈）',
    time: new Date().toISOString(),
  });
}
