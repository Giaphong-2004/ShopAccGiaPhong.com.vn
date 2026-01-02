<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Danh mục Tài khoản Game</h1>
        <p class="hero-subtitle">Chọn game bạn muốn tìm tài khoản và khám phá các ưu đãi tốt nhất.</p>
      </div>
    </section>

    <!-- Games Grid -->
    <section class="games-section">
      <div class="container">
        <div class="games-grid">
          <!-- Game Card 1 -->
          <div class="game-card">
            <div class="game-image">
              <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=500&fit=crop" alt="Liên Quân Mobile">
              <div class="game-badge">120+ Tài khoản</div>
            </div>
            <div class="game-info">
              <h3 class="game-title">Liên Quân Mobile</h3>
            </div>
          </div>

          <!-- Game Card 2 -->
          <div class="game-card">
            <div class="game-image">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop" alt="Free Fire">
              <div class="game-badge">90+ Key đã bán</div>
            </div>
            <div class="game-info">
              <h3 class="game-title">Hack Liên Quân Ios</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Column 1: Hoàng Tráng Shop -->
          <div class="footer-column">
            <div class="footer-brand">
              <div class="footer-logo">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 6V12C3 16.55 6.8 20.74 12 22C17.2 20.74 21 16.55 21 12V6L12 2Z" fill="#a78bfa" stroke="#a78bfa" stroke-width="1.5"/>
                  <path d="M12 8V12L15 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="footer-brand-title">ShopAccGiaPhong</h3>
            </div>
            <p class="footer-description">
              Shop acc game , hack map , buff MXH (TikTok,Instagram,Facebook,Youtube,Telegram,...) uy tín, giá rẻ hàng đầu Việt Nam. Hỗ trợ 24/7, giao dịch tự động, bảo mật tuyệt đối.
            </p>
          </div>

          <!-- Column 2: SẢN PHẨM -->
          <div class="footer-column">
            <h4 class="footer-heading">SẢN PHẨM</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Tài khoản Liên Quân</a></li>
              <li><a href="#" class="footer-link">Hack Liên Quân Ios</a></li>
              <li><a href="#" class="footer-link">Hỗ trợ buff tất cả MXH</a></li>
              <li><a href="#" class="footer-link">Nạp thẻ game</a></li>
            </ul>
          </div>

          <!-- Column 3: HỖ TRỢ -->
          <div class="footer-column">
            <h4 class="footer-heading">HỖ TRỢ</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Hướng dẫn mua hàng</a></li>
              <li><a href="#" class="footer-link">Chính sách bảo hành</a></li>
              <li><a href="#" class="footer-link">Điều khoản dịch vụ</a></li>
              <li><a href="#" class="footer-link">Liên hệ</a></li>
            </ul>
          </div>

          <!-- Column 4: THEO DÕI CHÚNG TÔI -->
          <div class="footer-column">
            <h4 class="footer-heading">THEO DÕI CHÚNG TÔI</h4>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="footer-divider"></div>
        <p class="copyright">© 2024 ShopAccGiaPhong. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  padding: 6rem 0 4rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
}

/* Games Section */
.games-section {
  padding: 2rem 0;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

/* Game Card */
.game-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.game-image {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-card:hover .game-image img {
  transform: scale(1.1);
}

.game-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.game-info {
  padding: 1.5rem;
}

.game-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

/* Footer */
.footer {
  margin-top: 6rem;
  padding: 3rem 0 1.5rem;
  background: var(--bg-dark);
  border-top: 1px solid var(--border);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footer-brand-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  white-space: nowrap;
}

.footer-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.footer-heading {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links li {
  margin: 0;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
  display: inline-block;
}

.footer-link:hover {
  color: var(--primary);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-link {
  color: var(--text-primary);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: transparent;
}

.social-link:hover {
  color: var(--primary);
  transform: translateY(-2px);
}

.social-link svg {
  width: 24px;
  height: 24px;
}

.footer-divider {
  height: 1px;
  background: rgba(148, 163, 184, 0.2);
  margin: 2rem 0 1.5rem 0;
}

.copyright {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .games-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>