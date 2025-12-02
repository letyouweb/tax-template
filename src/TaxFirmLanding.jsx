import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Shield, FileText, CheckCircle2, TrendingUp, Users, Lock, AlertCircle } from 'lucide-react';

const PremiumTaxFirm = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-amber-100 selection:text-amber-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@300;400;600;700&display=swap');
        .font-serif { font-family: 'Noto Serif KR', serif; }
        .font-sans { font-family: 'Noto Sans KR', sans-serif; }
        .snap-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
        }
        .snap-section {
          scroll-snap-align: start;
          min-height: 100vh;
        }
        @media (max-width: 768px) {
          .snap-container { scroll-snap-type: none; height: auto; }
          .snap-section { min-height: auto; height: auto; padding-top: 80px; padding-bottom: 80px; }
        }
      `}</style>

      {/* 네비게이션 */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#1a1a1a]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-white font-serif text-2xl tracking-widest font-bold z-50">
            YOO DONG SU
            <span className="block text-xs font-sans font-light tracking-[0.3em] text-amber-500 mt-1">TAX & ACCOUNTING</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {['회사소개', '인사이트', '전문분야', '상담문의'].map((item) => (
              <a key={item} href="#" className="text-sm font-light text-slate-300 hover:text-amber-400 transition-colors tracking-wide">
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main className="snap-container bg-slate-50">
        
        {/* Hero Section - 사진 배경색과 통일 */}
        <section className="snap-section relative flex items-center bg-[#1a1a1a] text-white overflow-hidden">
          <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="space-y-8">
              <p className="text-sm tracking-[0.3em] text-amber-500 font-semibold">
                YOO DONG SU · TAX & ACCOUNTING
              </p>
              <h1 className="font-serif text-4xl md:text-5xl leading-snug text-white">
                국세청 25년,<br />
                세무조사·양도·상속·증여 전문
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                복잡한 세무는 <span className="font-semibold text-white">유동수 세무회계</span>에 맡기시고,<br />
                대표님은 사업에만 집중하세요.
              </p>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button className="px-10 py-4 bg-amber-600 text-white rounded-sm hover:bg-amber-500 transition-all flex items-center justify-center gap-3 shadow-lg group">
                  <span className="font-medium tracking-wide text-lg">프리미엄 1:1 상담 예약</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 border border-slate-500 text-slate-300 rounded-sm hover:border-white hover:text-white transition-all flex items-center justify-center gap-3 hover:bg-white/5">
                  <Shield size={20} />
                  <span className="font-medium tracking-wide text-lg">세무조사 긴급 문의</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-transparent to-[#1a1a1a] z-10" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Main.jpg"
                  alt="유동수 대표 세무사"
                  className="w-full h-[420px] md:h-[520px] object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* 하단 CTA 버튼 */}
          <div className="absolute bottom-0 w-full border-t border-white/10 bg-[#111111]/90 backdrop-blur-md z-20">
            <div className="container mx-auto px-6 py-5 flex justify-center">
              <button className="px-12 py-4 bg-amber-600 text-white font-bold rounded-sm hover:bg-amber-500 transition-all text-lg shadow-xl flex items-center gap-3 group">
                <span>1:1 상담 예약</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Insight Section */}
        <section className="snap-section flex items-center bg-slate-50">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16 space-y-4">
              <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">INSIGHT</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                세무조사와 상속, <span className="text-amber-600">준비가 답입니다</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                미리 대비하면 세금 부담과 스트레스를 크게 줄일 수 있습니다.<br/>
                자주 받는 질문을 중심으로 핵심만 정리했습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <AlertCircle size={32} />, title: "세무조사", sub: "통지서를 받았다면", desc: "당황해서 전화부터 하지 마세요. 자료 준비와 정리부터 차근차근 안내해 드립니다." },
                { icon: <TrendingUp size={32} />, title: "양도소득세", sub: "아파트·상가 양도 전", desc: "판매 가격만 보지 마세요. 보유 기간, 거주 여부에 따른 진짜 수익을 계산해 드립니다." },
                { icon: <Users size={32} />, title: "상속·증여", sub: "부모 재산 상속 전", desc: "상속은 '돌아가신 뒤'가 늦습니다. 가족 분쟁을 줄이는 사전 설계를 함께합니다." },
                { icon: <Lock size={32} />, title: "조세불복", sub: "억울한 세금 고지", desc: "모든 세금이 정당하진 않습니다. 조사과 경험으로 다툴 수 있는지 먼저 검토합니다." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-amber-500 group">
                  <div className="text-slate-400 group-hover:text-amber-500 transition-colors mb-6">{card.icon}</div>
                  <div className="text-sm text-amber-600 font-medium mb-1">{card.title}</div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">{card.sub}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="snap-section flex items-center bg-[#1a1a1a] text-white">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">대표 세무 서비스</h2>
              <div className="w-12 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-slate-400">가장 자신 있는 분야에 집중합니다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="bg-slate-800/50 p-10 rounded-sm border border-slate-700 hover:border-amber-500 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Shield size={150} /></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-amber-500 rounded text-white"><Shield size={24} /></div>
                    <h3 className="text-2xl font-serif font-bold">세무조사 전담 대응</h3>
                  </div>
                  <div className="space-y-4 text-slate-300 mb-8">
                    <p className="text-sm font-medium text-amber-400">대상: 세무조사 통지서를 받아 불안한 개인·법인 사업자</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500 flex-shrink-0"/> 조사 단계별 대응 전략 수립</li>
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500 flex-shrink-0"/> 국세청 25년 경력 대표 세무사가 전 과정 직접 대응</li>
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500 flex-shrink-0"/> 필요 시 세무조사 사전 리허설 및 자료 정리 지원</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded border-l-4 border-amber-500">
                    <p className="text-sm text-white">"조사 과정에서의 불필요한 마찰을 줄이고, 추가 세 부담을 최대한 낮추는 데 집중합니다."</p>
                  </div>
                </div>
              </div>

              <div className="bg-white text-slate-900 p-10 rounded-sm border border-transparent hover:border-amber-500 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900"><FileText size={150} /></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-100 rounded text-slate-700"><FileText size={24} /></div>
                    <h3 className="text-2xl font-serif font-bold">양도·상속·증여 맞춤 설계</h3>
                  </div>
                  <div className="space-y-4 text-slate-600 mb-8">
                    <p className="text-sm font-medium text-amber-600">대상: 부동산·금융 자산 이전을 계획 중인 개인·가족</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-600 flex-shrink-0"/> 양도·상속·증여를 한 번에 고려한 종합 플랜</li>
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-600 flex-shrink-0"/> 상황별 시나리오에 따른 세 부담 비교</li>
                      <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-600 flex-shrink-0"/> 신고·서류 준비까지 원스톱 지원</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded border-l-4 border-slate-300">
                    <p className="text-sm text-slate-700">"세금은 줄이고, 가족 간 분쟁 가능성은 낮추는 방향으로 설계를 도와드립니다."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="snap-section flex items-center bg-slate-50">
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-amber-500 z-0"></div>
                <img src="/images/Main.jpg" alt="유동수 세무사" className="relative z-10 w-full shadow-2xl grayscale object-cover" />
                <div className="absolute bottom-10 -right-10 bg-white p-6 shadow-xl z-20 hidden md:block max-w-xs border-l-4 border-amber-500">
                  <p className="font-serif italic text-slate-700 text-sm leading-relaxed">
                    "세금은 피할 수 없지만, 억울한 세금까지 감당할 필요는 없습니다."
                  </p>
                </div>
              </div>

              <div className="space-y-8 pl-0 md:pl-10">
                <div>
                  <h4 className="text-amber-600 font-bold text-sm tracking-widest mb-2">ABOUT</h4>
                  <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">유동수 대표 세무사</h2>
                  <p className="text-slate-500 font-light">국세청 25년 경력, 조사과 출신 세무사</p>
                </div>
                
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-200 pt-6">
                  <p>국세청에서 25년 동안 세무 현장을 지켜봤습니다.<br/>강남세무서 조사과 사무관으로 근무하며 수많은 세무조사와 조세불복 사건을 처리했습니다.</p>
                  <p>이제는 그 경험을 바탕으로, 납세자 편에서 세무조사·양도·상속·증여 문제를 함께 풀어가고자 합니다.</p>
                </div>

                <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
                  <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>주요 경력
                  </h5>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>국세청 25년 근무</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>국립세무대학 졸업</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>제53회 세무사시험 합격</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>강남세무서 조사과 사무관 명예퇴임</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>반포·마포·영등포·부천세무서 등 근무</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="snap-section flex items-center bg-slate-50">
          <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            <div className="space-y-6">
              <div>
                <h4 className="text-amber-600 font-bold text-sm tracking-widest mb-2">LOCATION</h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">오시는 길</h2>
              </div>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                <div><p className="font-semibold">강남구청역 2번 출구</p><p>도보 6분거리에 있습니다.</p></div>
                <div><p className="font-semibold">상담전화</p><p>02-518-0130</p></div>
                <div><p className="font-semibold">영업시간</p><p>평일 오전 9:30 ~ 오후 5:30</p><p>주말 정기 휴무</p></div>
                <div><p className="font-semibold">주소안내</p><p>서울 강남구 언주로130길 23 평해빌딩 201호</p></div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-amber-500 z-0" />
              <img src="/images/location.jpg" alt="유동수 세무회계 오시는 길" className="relative z-10 w-full h-[260px] md:h-[360px] object-cover rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="snap-section flex items-center justify-center bg-[#1a1a1a] text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 px-6 space-y-8">
            <div className="space-y-4">
              <p className="text-amber-500 text-sm tracking-[0.3em] font-medium">CONSULTATION</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                지금 바로 상담받으세요
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                국세청 25년 경력의 전문가가<br className="md:hidden" /> 직접 상담해 드립니다.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
              <button className="px-12 py-5 bg-amber-600 text-white font-bold rounded-sm hover:bg-amber-500 transition-all text-lg shadow-xl flex items-center justify-center gap-3 group">
                <span>1:1 상담 예약하기</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-4 text-white border border-slate-600 px-8 py-5 rounded-sm hover:bg-white/5 transition-colors cursor-pointer">
                <Phone className="text-amber-500" size={24} />
                <span className="text-2xl font-serif font-bold">02-518-0130</span>
              </div>
            </div>
          </div>
          
          <footer className="absolute bottom-6 w-full text-center text-slate-600 text-xs">
            서울 강남구 언주로130길 23 평해빌딩 201호 | 대표세무사: 유동수 | 사업자등록번호: 714-17-00577
          </footer>
        </section>

      </main>
    </div>
  );
};

export default PremiumTaxFirm;
