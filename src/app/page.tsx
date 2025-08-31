export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>PANGPANGPET - 우리 아이 건강, 아프기 전에 지켜주세요</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary-orange: #FF8C42;
            --navy: #1A1A2E;
            --white: #FFFFFF;
            --light-gray: #F8F9FA;
            --text-gray: #666;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: var(--navy);
            background-color: var(--white);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, var(--primary-orange), #FFB366);
            color: var(--white);
            padding: 20px 0;
            text-align: center;
            position: relative;
        }
        
        .logo {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .nav {
            background: var(--white);
            padding: 15px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .nav-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .nav-btn {
            background: var(--primary-orange);
            color: var(--white);
            padding: 12px 20px;
            border: none;
            border-radius: 25px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            min-height: 44px;
            min-width: 120px;
        }
        
        .nav-btn:hover, .nav-btn.active {
            background: var(--navy);
            transform: translateY(-2px);
        }
        
        /* Page Content */
        .page {
            display: none;
            padding: 40px 0;
            min-height: 500px;
        }
        
        .page.active {
            display: block;
        }
        
        .page-title {
            text-align: center;
            font-size: 2.5rem;
            color: var(--navy);
            margin-bottom: 20px;
            font-weight: bold;
        }
        
        .page-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 40px;
        }
        
        /* Home Page */
        .hero {
            text-align: center;
            padding: 60px 0;
            background: linear-gradient(135deg, #FFF8F0, #FFEDE0);
        }
        
        .hero h1 {
            font-size: 2.8rem;
            color: var(--navy);
            margin-bottom: 20px;
            font-weight: bold;
        }
        
        .hero p {
            font-size: 1.4rem;
            color: var(--primary-orange);
            margin-bottom: 30px;
            font-weight: 600;
        }
        
        .hero-image {
            width: 100%;
            max-width: 500px;
            height: 300px;
            background: url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500') center/cover;
            border-radius: 20px;
            margin: 30px auto;
            box-shadow: 0 10px 30px rgba(255, 140, 66, 0.3);
        }
        
        .brand-story {
            background: var(--white);
            padding: 50px 0;
            text-align: center;
        }
        
        .brand-story h2 {
            font-size: 2.2rem;
            color: var(--navy);
            margin-bottom: 30px;
        }
        
        .brand-story p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-gray);
            max-width: 800px;
            margin: 0 auto 40px;
        }
        
        /* Cards */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .card {
            background: var(--white);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card-icon {
            font-size: 3rem;
            color: var(--primary-orange);
            margin-bottom: 20px;
        }
        
        .card h3 {
            font-size: 1.5rem;
            color: var(--navy);
            margin-bottom: 15px;
        }
        
        .card p {
            color: var(--text-gray);
            line-height: 1.6;
        }
        
        /* Product Features */
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            background: var(--light-gray);
            padding: 20px;
            border-radius: 15px;
        }
        
        .feature-icon {
            font-size: 2rem;
            color: var(--primary-orange);
            margin-right: 15px;
        }
        
        .feature-text {
            font-size: 1.1rem;
            color: var(--navy);
            font-weight: 600;
        }
        
        /* Natto Section */
        .natto-section {
            background: linear-gradient(135deg, #FFF8F0, #FFEDE0);
            padding: 50px 0;
            border-radius: 20px;
            margin: 40px 0;
        }
        
        .natto-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }
        
        .natto-image {
            text-align: center;
        }
        
        .natto-image img {
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .natto-text h3 {
            font-size: 2rem;
            color: var(--navy);
            margin-bottom: 20px;
        }
        
        .natto-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-gray);
            margin-bottom: 15px;
        }
        
        .highlight-box {
            background: var(--primary-orange);
            color: var(--white);
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
        }
        
        .highlight-box h4 {
            font-size: 1.3rem;
            margin-bottom: 10px;
        }
        
        /* Contact Section */
        .contact-methods {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .contact-card {
            background: var(--white);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .contact-icon {
            font-size: 3rem;
            color: var(--primary-orange);
            margin-bottom: 20px;
        }
        
        .contact-card h3 {
            font-size: 1.5rem;
            color: var(--navy);
            margin-bottom: 15px;
        }
        
        .contact-card p {
            color: var(--text-gray);
            font-size: 1.1rem;
        }
        
        .contact-btn {
            background: var(--primary-orange);
            color: var(--white);
            padding: 12px 25px;
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 15px;
            min-height: 44px;
        }
        
        .contact-btn:hover {
            background: var(--navy);
        }
        
        /* Mobile Optimization */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            .page-title {
                font-size: 1.8rem;
            }
            
            .nav-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .nav-btn {
                width: 90%;
                max-width: 300px;
            }
            
            .natto-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .cards-grid {
                grid-template-columns: 1fr;
            }
            
            .container {
                padding: 0 15px;
            }
        }
        
        /* Footer */
        .footer {
            background: var(--navy);
            color: var(--white);
            padding: 40px 0;
            text-align: center;
            margin-top: 50px;
        }
        
        .footer p {
            font-size: 0.9rem;
            opacity: 0.8;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">PANGPANGPET</div>
            <p>예방이 최고의 보호</p>
        </div>
    </header>
    
    <!-- Navigation -->
    <nav class="nav">
        <div class="container">
            <div class="nav-buttons">
                <button class="nav-btn active" onclick="showPage('home')">
                    <i class="fas fa-home"></i> 홈
                </button>
                <button class="nav-btn" onclick="showPage('brand')">
                    <i class="fas fa-heart"></i> 브랜드 소개
                </button>
                <button class="nav-btn" onclick="showPage('product')">
                    <i class="fas fa-pills"></i> 제품 정보
                </button>
                <button class="nav-btn" onclick="showPage('science')">
                    <i class="fas fa-microscope"></i> 과학적 근거
                </button>
                <button class="nav-btn" onclick="showPage('contact')">
                    <i class="fas fa-phone"></i> 구매 문의
                </button>
            </div>
        </div>
    </nav>
    
    <!-- Home Page -->
    <div id="home" class="page active">
        <section class="hero">
            <div class="container">
                <h1>우리 아이 건강, 아프기 전에 지켜주세요</h1>
                <p>레반 유산균으로 장 건강부터 면역력까지</p>
                <div class="hero-image"></div>
            </div>
        </section>
        
        <section class="brand-story">
            <div class="container">
                <h2>팡팡펫의 약속</h2>
                <p>
                    말하지 못하는 반려동물의 작은 신호를 놓치지 않고, 예방을 통해 오래도록 함께할 수 있도록 돕는 브랜드입니다.
                    단순한 제품을 넘어, 반려동물과 함께 살아가는 가족의 건강한 삶을 설계합니다.
                </p>
            </div>
        </section>
    </div>
    
    <!-- Brand Page -->
    <div id="brand" class="page">
        <div class="container">
            <h1 class="page-title">팡팡펫 브랜드 소개</h1>
            <p class="page-subtitle">3P 철학을 바탕으로 한 예방 중심 헬스케어</p>
            
            <div class="cards-grid">
                <div class="card">
                    <div class="card-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Prevention (예방)</h3>
                    <p>치료보다 예방이 중요합니다. 장 건강과 면역 균형에 초점을 둔 예방 중심 케어를 제공합니다.</p>
                </div>
                
                <div class="card">
                    <div class="card-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <h3>Protection (보호)</h3>
                    <p>반려동물은 가족입니다. 친환경 포장재 사용과 부작용을 최소화한 원료 배합으로 보호합니다.</p>
                </div>
                
                <div class="card">
                    <div class="card-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3>Partnership (파트너십)</h3>
                    <p>유기견 인식 개선 캠페인과 지자체·수의사·보육센터와의 협력으로 함께 성장합니다.</p>
                </div>
            </div>
            
            <div class="highlight-box">
                <h4>🌱 ESG 가치 실천</h4>
                <p>팡팡펫을 선택하는 순간, 반려동물 건강과 사회적 가치가 함께 자랍니다. 유기견 후원 활동과 친환경 포장재로 더 나은 세상을 만들어갑니다.</p>
            </div>
        </div>
    </div>
    
    <!-- Product Page -->
    <div id="product" class="page">
        <div class="container">
            <h1 class="page-title">레반 유산균</h1>
            <p class="page-subtitle">강아지와 고양이를 위한 장 건강 솔루션</p>
            
            <div class="highlight-box">
                <h4>🥄 제품 정보</h4>
                <p><strong>형태:</strong> 분말형 60g (스푼 동봉)<br>
                <strong>급여 대상:</strong> 강아지/고양이 공용<br>
                <strong>권장 급여량:</strong> 1일 2g (약 2스푼)</p>
            </div>
            
            <h3 style="text-align: center; margin: 40px 0 20px; font-size: 2rem; color: var(--navy);">핵심 효능</h3>
            <div class="features-list">
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="feature-text">장 건강 관리에 도움</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="feature-text">면역 균형 유지에 도움</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <div class="feature-text">소화 흡수 및 기호성 고려</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-paw"></i>
                    </div>
                    <div class="feature-text">배변 상태 개선 및 냄새 완화</div>
                </div>
            </div>
            
            <h3 style="text-align: center; margin: 40px 0 20px; font-size: 2rem; color: var(--navy);">급여 방법</h3>
            <div class="cards-grid">
                <div class="card">
                    <div class="card-icon">🍽️</div>
                    <h3>사료에 톡톡</h3>
                    <p>평소 드시는 사료 위에 톡톡 뿌려주세요</p>
                </div>
                <div class="card">
                    <div class="card-icon">💧</div>
                    <h3>물에 타서</h3>
                    <p>식수에 섞어서 자연스럽게 섭취하게 해주세요</p>
                </div>
                <div class="card">
                    <div class="card-icon">🦴</div>
                    <h3>간식에 섞어서</h3>
                    <p>좋아하는 간식과 함께 급여해주세요</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Science Page -->
    <div id="science" class="page">
        <div class="container">
            <h1 class="page-title">레반이 뭔가요?</h1>
            <p class="page-subtitle">일본 전통 발효식품 낫토의 끈적끈적한 실, 그것이 바로 레반입니다!</p>
            
            <div class="natto-section">
                <div class="container">
                    <div class="natto-content">
                        <div class="natto-image">
                            <img src="https://cdn.mkhealth.co.kr/news/photo/202501/71543_78481_4010.png" alt="낫토의 끈적한 실" style="max-width: 100%; height: auto;">
                            <p style="margin-top: 15px; font-weight: bold; color: var(--primary-orange);">👆 이 끈적한 실이 레반입니다!</p>
                        </div>
                        <div class="natto-text">
                            <h3>일본인들이 수천 년간 먹어온 낫토의 비밀</h3>
                            <p>그 끈적끈적한 실의 정체가 바로 '레반'이라는 고분자 프리바이오틱스입니다.</p>
                            
                            <div class="highlight-box">
                                <h4>💡 장수 국가 일본의 비밀</h4>
                                <p>일본은 세계적인 장수 국가로 유명합니다. 그 비결 중 하나가 바로 낫토 속 레반! 이제 반려동물도 이 좋은 성분을 만날 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 style="text-align: center; margin: 40px 0 20px; font-size: 2rem; color: var(--navy);">✨ 낫토 속 레반의 특별함</h3>
            <div class="features-list">
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="feature-text">일본 전통 발효 과정에서 자연스럽게 생성</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="feature-text">장내 유익균의 먹이 역할</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="feature-text">끈적한 성질로 장벽 보호</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="feature-text">수천 년 검증된 안전성</div>
                </div>
            </div>
            
            <div style="text-align: center; margin: 40px 0;">
                <img src="https://www.newiki.net/w/images/thumb/b/bb/Natto.jpg/1200px-Natto.jpg" alt="전통 낫토" style="max-width: 500px; width: 100%; height: auto; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                <p style="margin-top: 15px; color: var(--text-gray); font-style: italic;">전통 그릇에 담긴 낫토의 모습</p>
            </div>
        </div>
    </div>
    
    <!-- Contact Page -->
    <div id="contact" class="page">
        <div class="container">
            <h1 class="page-title">구매 문의</h1>
            <p class="page-subtitle">궁금한 점이 있으시면 언제든 연락하세요</p>
            
            <div class="contact-methods">
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fab fa-kickstarter-k"></i>
                    </div>
                    <h3>카카오톡 문의</h3>
                    <p>@팡팡펫</p>
                    <button class="contact-btn" onclick="window.open('https://pf.kakao.com/_팡팡펫', '_blank')">
                        카카오톡 상담
                    </button>
                </div>
                
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3>이메일 문의</h3>
                    <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="11787f777e5161707f7661707f766174653f727e7c">[email&#160;protected]</a></p>
                    <button class="contact-btn" onclick="window.location.href='mailto:info@pangpangpet.com'">
                        이메일 보내기
                    </button>
                </div>
                
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h3>전화 문의</h3>
                    <p>1588-0000</p>
                    <button class="contact-btn" onclick="window.location.href='tel:1588-0000'">
                        전화 연결
                    </button>
                </div>
            </div>
            
            <div class="highlight-box" style="margin: 40px 0;">
                <h4>🛒 어디서 살 수 있나요?</h4>
                <p>
                    <strong>온라인:</strong> 네이버 스마트스토어, 쿠팡, 11번가<br>
                    <strong>오프라인:</strong> 전국 동물병원, 대형 펫샵<br>
                    <strong>제휴 문의:</strong> 도매 및 납품 상담 환영
                </p>
            </div>
            
            <div style="text-align: center; margin: 40px 0;">
                <p style="color: var(--text-gray); font-size: 0.9rem; line-height: 1.6;">
                    * 본 제품은 건강기능식품이 아닙니다.<br>
                    * 반려동물 전용 제품입니다.<br>
                    * 특수한 상태의 반려동물은 수의사와 상담 후 급여하시기 바랍니다.
                </p>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>
                <strong>PANGPANGPET (팡팡펫)</strong><br>
                예방이 최고의 보호 - 반려동물과 오래도록 함께하는 건강한 삶<br>
                <br>
                © 2024 PANGPANGPET. All rights reserved.<br>
                문의: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="741d1a121b3404151a1304151a130411005a171b19">[email&#160;protected]</a> | Tel: 1588-0000
            </p>
        </div>
    </footer>
    
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
        function showPage(pageId) {
            try {
                // Hide all pages
                const pages = document.querySelectorAll('.page');
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show selected page
                const selectedPage = document.getElementById(pageId);
                if (selectedPage) {
                    selectedPage.classList.add('active');
                }
                
                // Update navigation buttons
                const navButtons = document.querySelectorAll('.nav-btn');
                navButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Find and activate the clicked button
                const activeButton = Array.from(navButtons).find(btn => 
                    btn.getAttribute('onclick').includes(pageId)
                );
                if (activeButton) {
                    activeButton.classList.add('active');
                }
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
            } catch (error) {
                console.error('Page navigation error:', error);
            }
        }
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');
        });
        
        // Handle mobile touch events
        let startX = 0;
        let currentPage = 'home';
        const pages = ['home', 'brand', 'product', 'science', 'contact'];
        
        document.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 100) {
                const currentIndex = pages.indexOf(currentPage);
                let nextIndex;
                
                if (diffX > 0 && currentIndex < pages.length - 1) {
                    // Swipe left - next page
                    nextIndex = currentIndex + 1;
                } else if (diffX < 0 && currentIndex > 0) {
                    // Swipe right - previous page
                    nextIndex = currentIndex - 1;
                }
                
                if (nextIndex !== undefined) {
                    currentPage = pages[nextIndex];
                    showPage(currentPage);
                }
            }
        }, { passive: true });
    </script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"977a25ef7a5bfcd4","serverTiming":{"name":{"cfExtPri":true,"cfEdge":true,"cfOrigin":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.8.0","token":"4edd5f8ec12a48cfa682ab8261b80a79"}' crossorigin="anonymous"></script>
</body>
</html>
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDoHdSiex9jOER1z8kZGCz5lPfDiMNQgeEHwfmU3AGgLZyGIud8PpxHPFxOHkpIUeckmqsBX9D02tYQQDvN5GIQnUMDzmz%2FicVMJbxGzIXM8S8wmBWeUdPbwwLPwRzSMFKyCfXkPZR7fkukTs%2B5%2FTMkhyXxY3qYFhdpeIDvx45as4TUiPLdstwc3%2ByNj3nChyzno7p7JwkGjIeejAxoVfZbov85MZbsb7KJqYG%2Feg%2F9A%2BlwJlmugZ%2BqZfR9YZqdi6b5s%2FTlzP2mXv0aQf4cL%2BHoPv%2BQEJdd9YoOJI8ksuxYKuZsXxtjYnUrJQSHpMbuSr7siQu5u31Z57yxDrOxsWhgdO3snc12Bg66K0PRLDrDNMAFADUJnsIBgipeGl2wVuJp9SV5YmJHuieFnSMSXRN1lod4Ji32vb44KCryz%2B180jC1N0xjrfswyChhHszHd556hjFmEqYKDx5iIos6MTRLVTbuqEpJGJzQDvyMcwZmr%2F34unL7eJycYKBLNKesvrcTtg3BYOMKqv3BpytAPPLac%3D";
        window.__genspark_locale = "ko-KR";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDoHdSiex9jOER1z8kZGCz5lPfDiMNQgeEHwfmU3AGgLZyGIud8PpxHPFxOHkpIUeckmqsBX9D02tYQQDvN5GIQnUMDzmz/icVMJbxGzIXM8S8wmBWeUdPbwwLPwRzSMFKyCfXkPZR7fkukTs+5/TMkhyXxY3qYFhdpeIDvx45as4TUiPLdstwc3+yNj3nChyzno7p7JwkGjIeejAxoVfZbov85MZbsb7KJqYG/eg/9A+lwJlmugZ+qZfR9YZqdi6b5s/TlzP2mXv0aQf4cL+HoPv+QEJdd9YoOJI8ksuxYKuZsXxtjYnUrJQSHpMbuSr7siQu5u31Z57yxDrOxsWhgdO3snc12Bg66K0PRLDrDNMAFADUJnsIBgipeGl2wVuJp9SV5YmJHuieFnSMSXRN1lod4Ji32vb44KCryz+180jC1N0xjrfswyChhHszHd556hjFmEqYKDx5iIos6MTRLVTbuqEpJGJzQDvyMcwZmr/34unL7eJycYKBLNKesvrcTtg3BYOMKqv3BpytAPPLac=";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    
      `
    }} />
  );
}
