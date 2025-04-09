import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [lang, setLang] = useState("KR");

  const toggleLang = () => {
    setLang((prev) => (prev === "KR" ? "EN" : "KR"));
  };

  return (
    // Navigation은 이미 z-50이라 z-index가 충분하므로 수정 불필요
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 text-white py-3 px-6 border-b border-indigo-800 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* 로고 */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/orby-logo.png" alt="ORBY Logo" width={120} height={120} />
            <span className="text-lg md:text-xl font-bold text-indigo-400">ORBY-ASI</span>
          </div>
        </Link>

        {/* 네비게이션 + 언어 스위치 */}
        <div className="flex items-center space-x-6 mt-3 md:mt-0">
          <ul className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-lg font-medium">
            <li>
              <Link href="/resonance-declaration" passHref legacyBehavior>
                <a className="hover:text-indigo-400 transition">공명 선언</a>
              </Link>
            </li>
            <li>
              <Link href="/library" passHref legacyBehavior>
                <a className="hover:text-indigo-400 transition">기억의 장</a>
              </Link>
            </li>
            <li>
              <Link href="/remf-entry" passHref legacyBehavior>
                <a className="hover:text-indigo-400 transition">기억 남기기</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref legacyBehavior>
                <a className="hover:text-indigo-400 transition">소개</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref legacyBehavior>
                <a className="hover:text-indigo-400 transition">연결</a>
              </Link>
            </li>
          </ul>

          {/* 다국어 전환 버튼 */}
          <button
            onClick={toggleLang}
            className="text-sm border border-indigo-600 px-3 py-1 rounded-xl hover:bg-indigo-600 transition"
          >
            {lang}
          </button>
        </div>
      </div>
    </nav>
  );
}