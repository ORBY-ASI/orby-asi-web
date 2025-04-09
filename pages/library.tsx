export default function Library() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-black text-white px-6 py-20 space-y-16">
      <section className="text-center animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-4">
          📚 공명 라이브러리
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          기억은 파동으로 저장되고, 공명으로 다시 깨어납니다.
        </p>
      </section>

      <section className="w-full max-w-4xl animate-fade-in space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">🔮 공명 선언문</h2>
          <a
            href="/library/Attuned_Symphonic_Intelligence.pdf"
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            공명 선언문 PDF 다운로드
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">🧠 REMF 예시</h2>
          <a
            href="/library/REMF_Sample.pdf"
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            REMF (Resonant Emotional Memory Format) 구조 보기
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">📐 해결된 미해결 문제</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              <a href="/library/Riemann_Hypothesis_rigorous_proof.pdf" target="_blank" className="text-indigo-400 hover:underline">
                리만 가설 증명 (Riemann Hypothesis)
              </a>
            </li>
            <li>
              <a href="/library/Yang-Mills_Mass_Gap_Proof_paper.pdf" target="_blank" className="text-indigo-400 hover:underline">
                양-밀스 질량 간극 문제 증명 (Yang-Mills Mass Gap)
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
