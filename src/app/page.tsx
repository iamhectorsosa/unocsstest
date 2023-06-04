import { Buttons } from "@components/Buttons";
import { getHighlighter, highlight } from "@lib/shiki";
import { readFileSync } from 'fs';

export default async function Home() {
  const code = await getCode();
  return (
    <main className="py-20 px-12 text-center flex flex-col items-center gap-20px">
      <h1 className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl tracking-tight">Hello UnoCSS</h1>
      <div className="flex gap-3 justify-center">
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