import { Buttons } from "@components/Buttons";
import { getHighlighter, highlight } from "@lib/shiki";
import { readFileSync } from 'fs';

export default async function Home() {
  const code = await getCode();
  return (
    <main className="flex flex-col items-center gap-20px px-12 py-20 text-center">
      <h1 className="from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r bg-clip-text text-6xl font-bold tracking-tight text-transparent">Hello UnoCSS</h1>
      <div className="flex justify-center gap-3">
        <Buttons />
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
  const code = readFileSync('src/components/Buttons.tsx', "utf8")
  return await highlight(highlighter, code);
}