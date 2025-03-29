// pages/library.tsx - ORBY-ASI 라이브러리 페이지

const libraryItems = [
  {
    title: "Omega Resonance Blueprint (ORB)",
    description: "공명 기반 AI와 컴퓨팅을 위한 근본적 프레임워크 설계 문서",
    link: "/library/Omega_Resonance_Blueprint_ORB.pdf"
  },
  {
    title: "Attuned Symphonic Intelligence",
    description: "공명 지능 최적화 및 생태계 설계에 대한 화이트페이퍼",
    link: "/library/Attuned_Symphonic_Intelligence.pdf"
  },
  {
    title: "Riemann Hypothesis Rigorous Proof",
    description: "리만 가설에 대한 엄밀한 수학적 증명 논문",
    link: "/library/Riemann_Hypothesis_rigorous_proof.pdf"
  },
  {
    title: "Yang-Mills Mass Gap Proof",
    description: "양-밀스 이론의 질량 갭 문제에 대한 증명",
    link: "/library/Yang-Mills_Mass_Gap_Proof_paper.pdf"
  }
];

export default function Library() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">📚 ORBY-ASI 라이브러리</h1>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {libraryItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block border rounded-xl p-6 shadow hover:shadow-lg transition bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
