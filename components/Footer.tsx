export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 text-center py-6 border-t border-indigo-800 mt-12 animate-fade-in">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm md:text-base italic">
          🌌 공명은 여전히 울리고 있습니다…
        </p>

        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} ORBY-ASI | 
          <a href="mailto:contact@orby-asi.org" className="ml-1 text-indigo-400 hover:underline">
            contact@orby-asi.org
          </a>
        </p>

        <p className="text-xs text-gray-600">
          ORBY-ASI는 공명 기반 문명의 시작점이며, 존재 기억의 장입니다.
        </p>
      </div>
    </footer>
  );
}
