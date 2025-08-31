export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PANGPANGPET - 우리 아이 건강, 아프기 전에 지켜주세요</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <div dangerouslySetInnerHTML={{
        __html: `
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
            
            body {
                font-family: 'Noto Sans KR', sans-serif;
            }
            
            .page-content {
                display: none;
                animation: fadeIn 0.5s ease-in-out;
            }
            
            .page-content.active {
                display: block;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .gradient-bg {
                background: linear-gradient(135deg, #FF8C42 0%, #FFB366 100%);
            }
            
            .text-gradient {
                background: linear-gradient(135deg, #FF8C42, #FFB366);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .nav-active {
                background-color: #FF8C42;
                color: white;
            }
            
            .hover-lift:hover {
                transform: translateY(-2px);
                transition: all 0.3s ease;
            }
          </style>

          <div class="bg-gray-50">
            <!-- Navigation -->
            <nav class="bg-white shadow-md fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center">
                            <button onclick="showPage('home')" class="text-2xl font-bold text-gradient">
                                PANGPANGPET
                            </button>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex space-x-8">
                            <button onclick="showPage('home')" id="nav-home" class="nav-btn px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors nav-active">
                                홈
                            </button>
                            <button onclick="showPage('brand')" id="nav-brand" class="nav-btn px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                                브랜드 소개
                            </button>
                            <button onclick="showPage('product')" id="nav-product" class="nav-btn px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                                제품 정보
                            </button>
                            <button onclick="showPage('science')" id="nav-science" class="nav-btn px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                                과학적 근거
                            </button>
                            <button onclick="showPage('contact')" id="nav-contact" class="nav-btn px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
                                구매 문의
                            </button>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button onclick="toggleMobileMenu()" class="text-gray-700 hover:text-orange-500">
                                <i class="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Mobile Navigation -->
                    <div id="mobile-menu" class="hidden md:hidden pb-4">
                        <button onclick="showPage('home')" class="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500">홈</button>
                        <button onclick="showPage('brand')" class="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500">브랜드 소개</button>
                        <button onclick="showPage('product')" class="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500">제품 정보</button>
                        <button onclick="showPage('science')" class="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500">과학적 근거</button>
                        <button onclick="showPage('contact')" class="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500">구매 문의</button>
                    </div>
                </div>
            </nav>

            <!-- Main Content -->
            <main class="pt-16">
                <!-- Home Page -->
                <div id="page-home" class="page-content active">
                    <!-- Hero Section -->
                    <section class="gradient-bg min-h-screen flex items-center">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div class="text-center lg:text-left">
                                    <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
                                        우리 아이 건강,<br>
                                        <span class="text-yellow-200">아프기 전에</span> 지켜주세요
                                    </h1>
                                    <p class="text-xl lg:text-2xl text-white mb-8">
                                        예방이 최고의 보호, PANGPANGPET
                                    </p>
                                    <div class="text-lg text-white mb-12 space-y-2">
                                        <p>말 못하는 반려동물의 작은 신호를 놓치지 않고,</p>
                                        <p>예방을 통해 오래도록 함께할 수 있도록 돕는 브랜드입니다.</p>
                                    </div>
                                    
                                    <!-- Main Navigation Buttons -->
                                    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                                        <button onclick="showPage('brand')" class="bg-white text-orange-500 px-6 py-4 rounded-lg font-semibold hover-lift shadow-lg">
                                            <i class="fas fa-heart mb-2 text-2xl block"></i>
                                            브랜드 소개
                                        </button>
                                        <button onclick="showPage('product')" class="bg-white text-orange-500 px-6 py-4 rounded-lg font-semibold hover-lift shadow-lg">
                                            <i class="fas fa-capsules mb-2 text-2xl block"></i>
                                            제품 정보
                                        </button>
                                        <button onclick="showPage('science')" class="bg-white text-orange-500 px-6 py-4 rounded-lg font-semibold hover-lift shadow-lg">
                                            <i class="fas fa-microscope mb-2 text-2xl block"></i>
                                            과학적 근거
                                        </button>
                                        <button onclick="showPage('contact')" class="bg-white text-orange-500 px-6 py-4 rounded-lg font-semibold hover-lift shadow-lg">
                                            <i class="fas fa-phone mb-2 text-2xl block"></i>
                                            구매 문의
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="text-center">
                                    <div class="bg-white rounded-full p-8 shadow-2xl inline-block">
                                        <div class="text-6xl text-orange-500">🐕🐱</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Brand Page -->
                <div id="page-brand" class="page-content">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl font-bold text-gray-800 mb-6">팡팡펫 브랜드 소개</h2>
                            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                예방 중심의 반려동물 헬스케어를 통해 더 건강하고 행복한 반려생활을 만들어갑니다.
                            </p>
                        </div>

                        <!-- 3P Philosophy -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div class="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
                                <div class="text-4xl text-orange-500 mb-4">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Prevention (예방)</h3>
                                <p class="text-gray-600 mb-4">치료보다 예방이 중요하다</p>
                                <div class="text-sm text-gray-500 space-y-2">
                                    <p>• 장 건강과 면역 균형에 초점</p>
                                    <p>• 아이가 아프기 전에 지켜주는 것</p>
                                    <p>• 그것이 최고의 보호입니다</p>
                                </div>
                            </div>
                            
                            <div class="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
                                <div class="text-4xl text-orange-500 mb-4">
                                    <i class="fas fa-leaf"></i>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Protection (보호)</h3>
                                <p class="text-gray-600 mb-4">반려동물은 가족이다</p>
                                <div class="text-sm text-gray-500 space-y-2">
                                    <p>• 친환경 포장재 사용</p>
                                    <p>• 부작용 최소화한 원료 배합</p>
                                    <p>• 작은 배려가 평생 건강을 지킵니다</p>
                                </div>
                            </div>
                            
                            <div class="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
                                <div class="text-4xl text-orange-500 mb-4">
                                    <i class="fas fa-handshake"></i>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-4">Partnership (파트너십)</h3>
                                <p class="text-gray-600 mb-4">함께할 때 가치가 커진다</p>
                                <div class="text-sm text-gray-500 space-y-2">
                                    <p>• 유기견 인식 개선 캠페인</p>
                                    <p>• 지자체·수의사·보육센터 협력</p>
                                    <p>• 함께 건강해지는 길을 만듭니다</p>
                                </div>
                            </div>
                        </div>

                        <!-- Brand Story -->
                        <div class="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8 mb-16">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">팡팡펫의 약속</h3>
                            <div class="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
                                <p class="text-lg font-medium">사랑하는 반려인 가족분께,</p>
                                <p>처음 만나는 날부터, 오래도록 함께할 수 있도록. 팡팡펫은 '예방이 최고의 보호'라는 믿음에서 시작되었습니다.</p>
                                <p>말하지 못하는 반려동물은 몸의 이상을 작은 신호로 표현합니다. 하지만 그 신호는 너무 작고 미묘해서 쉽게 지나치기 쉽습니다.</p>
                                <p>팡팡펫은 그 신호를 놓치지 않도록, 건강을 미리 지켜주는 '예방 중심' 솔루션을 제안합니다.</p>
                                <p>단순한 제품을 넘어, 우리는 '반려동물과 함께 살아가는 가족의 건강한 삶'을 설계하는 브랜드가 되고자 합니다.</p>
                                <p class="text-lg font-medium text-right">팡팡펫 드림</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Page -->
                <div id="page-product" class="page-content">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl font-bold text-gray-800 mb-6">팡팡펫 레반 유산균</h2>
                            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                레반 함유 유산균으로 반려동물의 장 건강부터 면역력까지 종합 케어
                            </p>
                        </div>

                        <!-- Product Overview -->
                        <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-4">제품 개요</h3>
                                    <div class="space-y-3 text-gray-600">
                                        <p><span class="font-semibold">제품명:</span> 팡팡펫 레반 유산균</p>
                                        <p><span class="font-semibold">형태:</span> 분말형 60g (스푼 동봉)</p>
                                        <p><span class="font-semibold">대상:</span> 강아지/고양이 공용</p>
                                        <p><span class="font-semibold">특징:</span> 레반(고분자 프리바이오틱스) 함유</p>
                                        <p><span class="font-semibold">급여량:</span> 1일 2g (약 2스푼) 권장</p>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <div class="bg-orange-100 rounded-lg p-8">
                                        <div class="text-6xl mb-4">🥄</div>
                                        <p class="text-gray-600">분말형 제품으로<br>간편한 급여</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Core Benefits -->
                        <div class="mb-12">
                            <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">핵심 효능</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div class="bg-white rounded-lg shadow-lg p-6 text-center hover-lift">
                                    <div class="text-3xl text-orange-500 mb-4">
                                        <i class="fas fa-stomach"></i>
                                    </div>
                                    <h4 class="font-bold text-gray-800 mb-2">장 건강 관리</h4>
                                    <p class="text-sm text-gray-600">장내 환경 개선에 도움을 줍니다</p>
                                </div>
                                
                                <div class="bg-white rounded-lg shadow-lg p-6 text-center hover-lift">
                                    <div class="text-3xl text-orange-500 mb-4">
                                        <i class="fas fa-shield-virus"></i>
                                    </div>
                                    <h4 class="font-bold text-gray-800 mb-2">면역 균형 유지</h4>
                                    <p class="text-sm text-gray-600">면역체계 균형 유지에 도움을 줍니다</p>
                                </div>
                                
                                <div class="bg-white rounded-lg shadow-lg p-6 text-center hover-lift">
                                    <div class="text-3xl text-orange-500 mb-4">
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <h4 class="font-bold text-gray-800 mb-2">소화 흡수 고려</h4>
                                    <p class="text-sm text-gray-600">소화 흡수 및 기호성을 고려했습니다</p>
                                </div>
                                
                                <div class="bg-white rounded-lg shadow-lg p-6 text-center hover-lift">
                                    <div class="text-3xl text-orange-500 mb-4">
                                        <i class="fas fa-wind"></i>
                                    </div>
                                    <h4 class="font-bold text-gray-800 mb-2">배변 냄새 완화</h4>
                                    <p class="text-sm text-gray-600">배변 상태 개선 및 냄새 완화에 도움</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Science Page -->
                <div id="page-science" class="page-content">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl font-bold text-gray-800 mb-6">과학적 근거</h2>
                            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                레반의 우수성과 과학적 근거를 알아보세요
                            </p>
                        </div>

                        <!-- What is Levan -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                            <div class="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-6">
                                <h3 class="text-2xl font-bold text-center">레반이 뭔가요?</h3>
                                <p class="text-center mt-2">일본 전통 발효식품 낫토의 끈적끈적한 실, 그것이 바로 레반입니다!</p>
                            </div>
                            
                            <div class="p-8">
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <img src="https://cdn.mkhealth.co.kr/news/photo/202501/71543_78481_4010.png" 
                                             alt="낫토의 끈적끈적한 실" 
                                             class="w-full rounded-lg shadow-md">
                                        <div class="text-center mt-4">
                                            <div class="bg-yellow-100 rounded-lg p-4 inline-block">
                                                <p class="text-sm font-bold text-gray-800">
                                                    👆 이 끈적한 실이 레반입니다!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="space-y-4">
                                        <h4 class="text-xl font-bold text-gray-800">일본인들이 수천 년간 먹어온 낫토의 비밀</h4>
                                        <p class="text-gray-600">
                                            일본인들이 수천 년간 먹어온 낫토의 끈적끈적한 실. 
                                            그 정체가 바로 '레반'이라는 고분자 프리바이오틱스입니다.
                                        </p>
                                        
                                        <div class="bg-blue-50 rounded-lg p-4">
                                            <h5 class="font-bold text-gray-800 mb-2">✨ 낫토 속 레반의 특별함</h5>
                                            <ul class="text-sm text-gray-600 space-y-1">
                                                <li>• 일본 전통 발효 과정에서 자연스럽게 생성</li>
                                                <li>• 장내 유익균의 먹이 역할</li>
                                                <li>• 끈적한 성질로 장벽 보호</li>
                                                <li>• 수천 년 검증된 안전성</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Page -->
                <div id="page-contact" class="page-content">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl font-bold text-gray-800 mb-6">구매 문의</h2>
                            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                궁금한 점이 있으시면 언제든 연락하세요
                            </p>
                        </div>

                        <!-- Contact Methods -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div class="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
                                <div class="text-4xl text-yellow-500 mb-4">
                                    <i class="fab fa-kakao"></i>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-4">카카오톡 문의</h3>
                                <p class="text-gray-600 mb-4">가장 빠른 상담</p>
                                <button class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                                    카톡 문의하기
                                </button>
                            </div>
                            
                            <div class="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
                                <div class="text-4xl text-blue-500 mb-4">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-4">이메일 문의</h3>
                                <p class="text-gray-600 mb-4">상세한 문의사항</p>
                                <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                    이메일 보내기
                                </button>
                            </div>
                            
                            <div class="bg-white rounded-lg shadow-lg p-8 text-center hover-lift">
                                <div class="text-4xl text-green-500 mb-4">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <h3 class="text-xl font-bold text-gray-800 mb-4">전화 문의</h3>
                                <p class="text-gray-600 mb-4">직접 상담</p>
                                <button class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                                    전화 걸기
                                </button>
                            </div>
                        </div>

                        <!-- Contact Information -->
                        <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                            <h3 class="text-xl font-bold text-gray-800 mb-6">연락처 정보</h3>
                            <div class="space-y-4 max-w-md mx-auto">
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-building text-gray-500 mr-3"></i>
                                    <span class="text-gray-700">회사명: 리얼비트(Realbeat)</span>
                                </div>
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-envelope text-gray-500 mr-3"></i>
                                    <span class="text-gray-700">이메일: info@pangpangpet.com</span>
                                </div>
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-phone text-gray-500 mr-3"></i>
                                    <span class="text-gray-700">전화: 1588-0000</span>
                                </div>
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-clock text-gray-500 mr-3"></i>
                                    <span class="text-gray-700">운영시간: 평일 9:00-18:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <!-- Footer -->
            <footer class="bg-gray-800 text-white py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">PANGPANGPET</h3>
                            <p class="text-gray-300 text-sm">
                                예방이 최고의 보호<br>
                                반려동물과 오래도록 함께하는 건강한 삶
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="font-bold mb-4">빠른 링크</h4>
                            <div class="space-y-2 text-sm">
                                <button onclick="showPage('brand')" class="block text-gray-300 hover:text-white transition-colors">브랜드 소개</button>
                                <button onclick="showPage('product')" class="block text-gray-300 hover:text-white transition-colors">제품 정보</button>
                                <button onclick="showPage('science')" class="block text-gray-300 hover:text-white transition-colors">과학적 근거</button>
                                <button onclick="showPage('contact')" class="block text-gray-300 hover:text-white transition-colors">구매 문의</button>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="font-bold mb-4">중요 안내</h4>
                            <div class="space-y-2 text-sm text-gray-300">
                                <p>• 건강기능식품이 아닙니다</p>
                                <p>• 반려동물 전용 제품입니다</p>
                                <p>• 특수 상황 시 수의사 상담 권장</p>
                                <p>• 개봉 후 서늘하고 건조한 곳에 보관</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2024 PANGPANGPET. All rights reserved. | 예방이 최고의 보호</p>
                    </div>
                </div>
            </footer>
          </div>

          <script>
              function showPage(pageId) {
                  // Hide all pages
                  const pages = document.querySelectorAll('.page-content');
                  pages.forEach(page => {
                      page.classList.remove('active');
                  });
                  
                  // Show selected page
                  document.getElementById('page-' + pageId).classList.add('active');
                  
                  // Update navigation
                  const navButtons = document.querySelectorAll('.nav-btn');
                  navButtons.forEach(btn => {
                      btn.classList.remove('nav-active');
                  });
                  
                  document.getElementById('nav-' + pageId).classList.add('nav-active');
                  
                  // Close mobile menu if open
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                      mobileMenu.classList.add('hidden');
                  }
                  
                  // Scroll to top
                  window.scrollTo(0, 0);
              }
              
              function toggleMobileMenu() {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                      mobileMenu.classList.toggle('hidden');
                  }
              }
          </script>
        `
      }} />
    </>
  );
}
