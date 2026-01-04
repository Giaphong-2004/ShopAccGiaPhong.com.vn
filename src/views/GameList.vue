<template>
  <div class="game-list-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Danh mục <span class="highlight">Tài khoản Game</span></h1>
        <p class="hero-subtitle">Chọn game bạn muốn tìm tài khoản và khám phá các ưu đãi tốt nhất.</p>
      </div>
    </section>

    <!-- Filter & List Section -->
    <section class="list-section">
      <div class="container">
        <!-- Category Filter -->
        <div class="category-filter">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Games List Grid -->
        <div class="games-list-grid">
          <div 
            v-for="game in filteredGames" 
            :key="game.id"
            class="game-list-card"
            @click="goToGameDetail(game.id)"
          >
            <div class="game-card-image">
              <img :src="game.image" :alt="game.name">
              <div v-if="game.badge" class="game-card-badge">{{ game.badge }}</div>
            </div>
            
            <div class="game-card-content">
              <h3 class="game-card-title">{{ game.name }}</h3>
              <p class="game-card-desc">{{ game.description }}</p>
              
              <div class="game-card-stats">
                <div v-if="game.stars" class="stat">
                  <span class="stat-label">Sao:</span>
                  <span class="stat-value">{{ game.stars }}</span>
                </div>
                <div v-if="game.language" class="stat">
                  <span class="stat-label">Ngôn ngữ:</span>
                  <span class="stat-value">{{ game.language }}</span>
                </div>
                <div v-if="game.server" class="stat">
                  <span class="stat-label">Server:</span>
                  <span class="stat-value">{{ game.server }}</span>
                </div>
              </div>

              <div class="game-card-info">
                <div v-if="game.skin" class="info-item">
                  <span class="info-label">Skin:</span>
                  <span class="info-value">{{ game.skin }}</span>
                </div>
                <div v-if="game.rp" class="info-item">
                  <span class="info-label">RP:</span>
                  <span class="info-value">{{ game.rp }}</span>
                </div>
              </div>
            </div>

            <div class="game-card-footer">
              <div class="price">{{ game.price }}</div>
              <button class="btn-buy">Mua Ngay</button>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="page-btn">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <span class="page-dots">...</span>
          <button class="page-btn last">•</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Column 1: ShopAccGiaPhong -->
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
  name: 'GameList',
  data() {
    return {
      activeCategory: 'Tất cả',
      categories: ['Tất cả', 'Liên Quân', 'Free Fire', 'Roblox', 'Valorant'],
      games: [
        {
          id: 1,
          name: 'Acc Liên Quân Siêu Cấp',
          category: 'Liên Quân',
          description: 'Tài khoản Liên Quân rank cao, hero đầy đủ, giá rẻ với mục đích để chơi được lâu dài',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#15344',
          stars: '5/5 (23)',
          language: 'Tiếng Việt',
          server: 'Việt Nam',
          skin: '50+',
          rp: 'Hết',
          price: '450.000đ',
          paid: '3 ngày trước'
        },
        {
          id: 2,
          name: 'Acc Free Fire Vô Địch',
          category: 'Free Fire',
          description: 'Tài khoản Free Fire rank cao, đủ vũ khí, skin hiếm, giao dịch an toàn',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#15780',
          stars: '4.8/5 (18)',
          language: 'Tiếng Việt',
          server: 'Việt Nam',
          skin: '200+',
          rp: 'Hết Hidden',
          price: '600.000đ',
          paid: '1 ngày trước'
        },
        {
          id: 3,
          name: 'Acc Roblox Limited',
          category: 'Roblox',
          description: 'Tài khoản Roblox có item limitless đắt giá, avatar cực ngầu',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#18513',
          stars: '5/5 (12)',
          language: 'English',
          server: 'Limited 8',
          skin: 'Limitless 5',
          price: '1.200.000đ',
          paid: '2 ngày trước'
        },
        {
          id: 4,
          name: 'Acc Valorant Bất Tử',
          category: 'Valorant',
          description: 'Tài khoản Valorant rank cao, radianite đầy, skin đẹp, Prime Reapair',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#26480',
          stars: '5/5 (8)',
          language: 'English',
          server: 'Prime',
          rp: 'JP 3980',
          price: '950.000đ',
          paid: '4 ngày trước'
        },
        {
          id: 5,
          name: 'Liên Quân Mobile',
          category: 'Liên Quân',
          description: 'Tài khoản Liên Quân chơi được ngay, đủ trang bị cơ bản',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#28741',
          stars: '90+ sold',
          language: 'Tiếng Việt',
          server: 'Ranking',
          price: '50.000đ',
          paid: '5 ngày trước'
        },
        {
          id: 6,
          name: 'Hack Liên Quân IOS',
          category: 'Liên Quân',
          description: 'Key hack Liên Quân dành cho IOS, cài đặt dễ dàng, bảo mật cao',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#28600',
          stars: 'Admin Chat',
          language: 'Tools / Utilities',
          price: '300.000đ',
          paid: '6 ngày trước'
        },
        {
          id: 7,
          name: 'Acc Random VIP',
          category: 'Roblox',
          description: 'Tài khoản Roblox Random VIP giá rẻ để tải về',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#18796',
          price: '50.000đ',
          paid: '7 ngày trước'
        },
        {
          id: 8,
          name: 'Acc Steam Full Game',
          category: 'Valorant',
          description: 'Tài khoản Steam liền khoảnh đầy game CS:GO, PUBG, GTA V,...',
          image: '@/assets/images/lienquanmobile.jpg',
          badge: '#18789',
          stats: 'Games 25+',
          description2: 'Prime Yas',
          price: '300.000đ',
          paid: '8 ngày trước'
        }
      ]
    }
  },
  computed: {
    filteredGames() {
      if (this.activeCategory === 'Tất cả') {
        return this.games
      }
      return this.games.filter(game => game.category === this.activeCategory)
    }
  },
  methods: {
    goToGameDetail(gameId) {
      this.$router.push(`/games/${gameId}`)
    }
  }
}
</script>

<style scoped>
.game-list-page {
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
  padding: 3rem 0 2rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.hero-title .highlight {
  background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
}

/* List Section */
.list-section {
  padding: 2rem 0;
}

/* Category Filter */
.category-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
}

.filter-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

/* Games List Grid */
.games-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.game-list-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.game-list-card:hover {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
  transform: translateY(-4px);
}

.game-card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.game-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-list-card:hover .game-card-image img {
  transform: scale(1.05);
}

.game-card-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0.7);
  color: #a0aec0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.game-card-content {
  padding: 1rem;
  flex: 1;
}

.game-card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game-card-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}

.game-card-stats {
  display: flex;
  gap: 0.75rem;
  margin: 0.75rem 0;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
}

.stat-label {
  color: var(--text-secondary);
}

.stat-value {
  color: var(--primary);
  font-weight: 600;
}

.game-card-info {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 0.75rem 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
}

.info-label {
  color: var(--text-secondary);
}

.info-value {
  color: var(--primary);
  font-weight: 600;
}

.game-card-footer {
  padding: 0 1rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: auto;
}

.price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
}

.btn-buy {
  background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s;
  flex: 1;
}

.btn-buy:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
}

/* Pagination */
.pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.page-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.page-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.page-btn:first-child {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.page-btn.last {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.page-dots {
  color: var(--text-secondary);
  margin: 0 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .games-list-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .games-list-grid {
    grid-template-columns: 1fr;
  }

  .category-filter {
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .filter-btn {
    white-space: nowrap;
  }
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

@media (max-width: 768px) {
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
