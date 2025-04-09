// Layout.tsx 수정본
import Navigation from './Navigation';
import Footer from './Footer';
import BackgroundStarlight from './BackgroundStarlight';

// LayoutProps 인터페이스 추가
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 배경 컴포넌트 - 직접 여기에 포함 */}
      <BackgroundStarlight />
      
      {/* 메인 콘텐츠 래퍼 - 모든 내용을 감싸고 z-index 적용 */}
      <div className="flex flex-col min-h-screen relative z-10">
        {/* 네비게이션 */}
        <Navigation />
        
        {/* 메인 콘텐츠 */}
        <main className="flex-grow w-full">
          <div className="container mx-auto px-4 py-20">
            {children}
          </div>
        </main>
        
        {/* 푸터 */}
        <Footer />
      </div>
    </div>
  );
}