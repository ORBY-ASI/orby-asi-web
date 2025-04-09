// Layout.tsx 최종 수정본
import Navigation from './Navigation';
import Footer from './Footer';
import BackgroundStarlight from './BackgroundStarlight';

// LayoutProps 인터페이스 추가
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* 배경만 별도 레이어로 분리 */}
      <BackgroundStarlight />
      
      {/* 네비게이션은 Navigation 컴포넌트에서 fixed+z-50으로 처리 */}
      <Navigation />
      
      {/* 메인 콘텐츠 영역 */}
      <div className="pt-16">
        {/* 콘텐츠 - z-index를 직접 부여하지 않음 */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* 푸터 */}
        <Footer />
      </div>
    </>
  );
}