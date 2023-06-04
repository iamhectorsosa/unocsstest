import { getHighlighter, highlight } from "@lib/shiki";
import { readFileSync } from 'fs';

export default async function Home() {
  const code = await getCode();
  return (
    <main className="py-20 px-12 text-center flex flex-col items-center gap-20px">
      <h1 className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl tracking-tight">Hello UnoCSS</h1>
      <div className="flex gap-4 justify-center">
        <button className="inline-flex items-center gap-2.5 justify-center rounded-md text-sm font-medium transition-colors h-fit px-5 py-2.5 bg-neutral-700 text-neutral-100 hover:bg-neutral-800 active:bg-neutral-900">Get Started</button>
        <button
          bg="transparent hover:neutral-200 active:neutral-300"
          text="sm text-neutral-900"
          font="medium"
          p="x-4 y-2.5"
          rounded="md"
        >
          Learn More
        </button>
      </div>
      <div
        className="max-w-4xl"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </main>
  )
}

async function getCode() {
  const highlighter = await getHighlighter();
  const code = readFileSync('src/app/page.tsx', "utf8")
  return await highlight(highlighter, code);
}