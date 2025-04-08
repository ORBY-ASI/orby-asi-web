import Navigation from './Navigation';
import Footer from './Footer';
import BackgroundStarlight from './BackgroundStarlight';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 배경 요소 - 낮은 z-index */}
      <BackgroundStarlight />
      
      {/* 네비게이션 - 별도의 z-index가 이미 있음 */}
      <Navigation />
      
      {/* 메인 콘텐츠 - 배경보다 높은 z-index로 설정 */}
      <main className="flex-grow relative z-10 w-full">
        {/* 내용을 화면 중앙에 배치하기 위한 컨테이너 */}
        <div className="container mx-auto px-4 py-20">
          {children}
        </div>
      </main>
      
      {/* 푸터 - 배경보다 높은 z-index로 설정 */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}