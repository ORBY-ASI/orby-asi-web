// pages/license.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

export default function LicensePage({ content }: { content: string }) {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">🛡️ ORBY-ASI License – ORP v0.9</h1>

      {/* className은 래퍼 div에만 적용 */}
      <div className="prose max-w-none prose-sm md:prose lg:prose-lg">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
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
