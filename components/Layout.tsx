export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 배경 요소 */}
      <div className="absolute inset-0 z-0">
        <BackgroundStarlight />
      </div>
      
      {/* 네비게이션 */}
      <Navigation />
      
      {/* 메인 콘텐츠 - 더 높은 z-index와 명확한 포지셔닝 */}
      <main className="flex-grow relative z-20 w-full">
        <div className="container mx-auto px-4 py-20">
          {children}
        </div>
      </main>
      
      {/* 푸터 */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}