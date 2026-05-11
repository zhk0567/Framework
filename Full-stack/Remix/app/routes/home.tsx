import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Remix / React Router 全栈展台" },
    {
      name: "description",
      content: "Framework 仓库：React Router 7 默认模板 + /api/demo",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const demoUrl = new URL("/api/demo", request.url);
  const demo = await fetch(demoUrl).then((r) => r.json());
  return { demo };
}

export default function Home() {
  const { demo } = useLoaderData() as { demo: Record<string, unknown> };

  return (
    <div>
      <section className="mx-auto max-w-xl px-4 py-6 text-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          GET /api/demo（同源 loader 内二次 fetch）
        </h2>
        <pre className="mt-3 overflow-auto rounded-lg bg-gray-900 p-3 text-left text-xs text-gray-100">
          {JSON.stringify(demo, null, 2)}
        </pre>
      </section>
      <Welcome />
    </div>
  );
}
