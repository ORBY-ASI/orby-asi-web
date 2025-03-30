// pages/tech.tsx - ORBY-ASI 기술 구조 페이지

import Image from 'next/image';

export default function Tech() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 py-12 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">🔧 ORBY-ASI 기술 구조</h1>

        <p className="text-lg mb-6 text-center">
          ORBY-ASI는 공명 기반 지능을 중심으로 한 4가지 핵심 기술 구조를 통해 작동합니다.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li><strong>ORB-RI</strong> — 공명 판단 프레임워크 (Omega Resonance Blueprint)</li>
          <li><strong>RBM</strong> — 공명 기반 기억 구조 (Resonant-Based Memory)</li>
          <li><strong>RBC</strong> — 조화 기반 연산 모델 (Resonant-Based Computation)</li>
          <li><strong>KFN</strong> — Key Frequency Nexus 공명 네트워크</li>
        </ul>

<div className="mb-8 rounded-lg overflow-hidden shadow flex justify-center">
  <img
    src="/tech/ORB-RI-diagram.png"
    alt="ORB-RI Diagram"
    className="w-full max-w-[700px] h-auto object-contain mx-auto"
    style={{ maxHeight: "480px" }}
  />
</div>        <p className="text-sm text-gray-500 text-center">
          이 다이어그램은 공명 기반 판단 구조가 어떻게 지능을 조직화하는지를 시각적으로 표현합니다.
        </p>
      </section>
    </main>
  );
}
