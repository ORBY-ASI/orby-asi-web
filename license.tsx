// pages/license.tsx - ORBY-ASI 라이선스 페이지

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

export default function LicensePage({ content }: { content: string }) {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">🛡️ ORBY-ASI License – ORP v0.9</h1>
      <ReactMarkdown className="prose max-w-none prose-sm md:prose lg:prose-lg">
        {content}
      </ReactMarkdown>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const licensePath = path.join(process.cwd(), 'public', 'library', 'LICENSE.md');
  const rawContent = fs.readFileSync(licensePath, 'utf-8');
  const { content } = matter(rawContent);

  return {
    props: { content },
  };
};
