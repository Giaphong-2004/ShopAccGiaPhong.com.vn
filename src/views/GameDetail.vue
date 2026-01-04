<template>
  <div class="game-detail-page">
    <div class="container">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/">Trang chủ</router-link>
        <span class="separator">›</span>
        <router-link to="/games">Danh sách game</router-link>
        <span class="separator">›</span>
        <span>{{ gameDetail.name }}</span>
      </div>

      <!-- Main Content -->
      <div class="detail-container">
        <!-- Left: Images -->
        <div class="images-section">
          <div class="main-image">
            <img :src="gameDetail.image" :alt="gameDetail.name">
            <div v-if="gameDetail.hotPick" class="badge-hot">HOT PICK</div>
          </div>
          <div class="thumbnail-images">
            <div v-for="(img, index) in gameDetail.thumbnails" :key="index" class="thumbnail">
              <img :src="img" :alt="`thumbnail-${index}`">
            </div>
          </div>
        </div>

        <!-- Right: Info -->
        <div class="info-section">
          <!-- Badges -->
          <div class="badges">
            <span v-if="gameDetail.newProduct" class="badge green-badge">Hàng mới</span>
            <span v-if="gameDetail.trending" class="badge blue-badge">Đang bán chạy</span>
          </div>

          <!-- Title -->
          <h1 class="product-title">{{ gameDetail.name }}</h1>

          <!-- Rating -->
          <div class="rating">
            <div class="stars">
              <span v-for="i in 5" :key="i" class="star filled">★</span>
              <span class="rating-text">{{ gameDetail.rating }} ({{ gameDetail.reviews }} đánh giá)</span>
            </div>
          </div>

          <!-- Price -->
          <div class="price-section">
            <div class="price-new">{{ gameDetail.price }}</div>
            <div v-if="gameDetail.oldPrice" class="price-old">{{ gameDetail.oldPrice }}</div>
          </div>

          <!-- Description -->
          <p class="description">{{ gameDetail.description }}</p>

          <!-- Key Features -->
          <div class="features">
            <h3 class="features-title">Mô tả chi tiết</h3>
            <ul class="features-list">
              <li v-for="(feature, index) in gameDetail.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Benefits -->
          <div class="benefits-grid">
            <div class="benefit-item">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm-2 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>
              </svg>
              <div>
                <h4>Cam kết bảo hành</h4>
                <p>{{ gameDetail.warranty }}</p>
              </div>
            </div>
            <div class="benefit-item">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm-2 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>
              </svg>
              <div>
                <h4>Bác hàng trực tiếp</h4>
                <p>{{ gameDetail.delivery }}</p>
              </div>
            </div>
            <div class="benefit-item">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm-2 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>
              </svg>
              <div>
                <h4>Giao hàng tự động</h4>
                <p>{{ gameDetail.autoDelivery }}</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="btn-buy" @click="goToTopUp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              MUA NGAY
            </button>
            <button class="btn-chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              Chat với người bán
            </button>
          </div>

          <!-- Shop Info -->
          <div class="shop-info">
            <div class="shop-header">
              <svg class="shop-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              <div>
                <h4>DARK</h4>
                <p class="shop-rating">★★★★★ (105 bình giá)</p>
              </div>
              <button class="btn-view-shop">Xem Shop</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <section class="reviews-section">
        <h2>Đánh giá từ khách hàng</h2>
        <div class="reviews-grid">
          <div v-for="(review, index) in gameDetail.customerReviews" :key="index" class="review-card">
            <div class="review-header">
              <div class="reviewer-info">
                <div class="reviewer-avatar" :style="{ backgroundColor: review.avatarColor }">
                  {{ review.name.charAt(0) }}
                </div>
                <div>
                  <h4>{{ review.name }}</h4>
                  <div class="review-stars">
                    <span v-for="i in 5" :key="i" class="star">★</span>
                  </div>
                </div>
              </div>
            </div>
            <p class="review-text">{{ review.text }}</p>
            <p class="review-date">{{ review.date }}</p>
          </div>
        </div>
      </section>
    </div>

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
import gameImage from '@/assets/images/lienquanmobile.jpg'

export default {
  name: 'GameDetail',
  data() {
    return {
      gameDetail: {
        id: 1,
        name: 'Valorant Ascendant Account - Full Skins & Rare Gun Buddies',
        image: gameImage,
        thumbnails: [
          gameImage,
          gameImage,
          gameImage,
          gameImage
        ],
        hotPick: true,
        newProduct: true,
        trending: true,
        price: '2.500.000đ',
        oldPrice: '3.800.000đ',
        rating: '4.9',
        reviews: 156,
        description: 'Tài khoản Valorant Rank Ascendant 3 cấp "đặc" dành cho anh em xứ trụ. Full thông tin chính chủ, quả năng tính tin cây đông lợi xứ sát Valo Prime, Phantom OMi nhập cập tất cả những ứng',
        features: [
          'Trang cấp 46 (Bao gồm 5 skin Battle Pass có hạn)',
          'Đủ mủ khóa tất cả Agent',
          'Tài khoản cách, không toxic, history xanh muốt'
        ],
        warranty: 'Hàng đã được kiểm hộc',
        delivery: 'Giao hàng tự động qua bot',
        autoDelivery: 'Ngay sau khi thanh toán',
        customerReviews: [
          {
            name: 'Hoàng Nam',
            avatarColor: '#6366f1',
            text: 'Hàng chất lượng tốt, bên shop tư vấn rất nhiệt tình. Shop hỗ trợ tốt nhất từ thời bao lâu không quá đắc"',
            date: 'Được 0 ngày trước',
            stars: 5
          },
          {
            name: 'Trần Đình',
            avatarColor: '#a78bfa',
            text: 'Sản phẩm tốt, giao hàng nhanh được 1 nốt mast bài lớng. Hài lòng"',
            date: 'Được 1 ngày trước',
            stars: 5
          },
          {
            name: 'Linh Chi',
            avatarColor: '#ec4899',
            text: 'Rất ưng, chất lượng. Dùng được như mô tả lên Chắm on shop',
            date: 'Được 2 ngày trước',
            stars: 5
          }
        ]
      }
    }
  },
  methods: {
    goToTopUp() {
      this.$router.push('/topup')
    }
  }
}
</script>

<style scoped>
.game-detail-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--primary-dark);
}

.breadcrumb .separator {
  color: var(--text-secondary);
  margin: 0 0.25rem;
}

/* Detail Container */
.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Images Section */
.images-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-card);
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge-hot {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.85rem;
}

.thumbnail-images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.thumbnail {
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail:hover {
  border-color: var(--primary);
}

/* Info Section */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Badges */
.badges {
  display: flex;
  gap: 0.75rem;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.green-badge {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.blue-badge {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

/* Product Title */
.product-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
}

/* Rating */
.rating {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stars {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.star {
  color: #fbbf24;
  font-size: 1.25rem;
}

.rating-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Price Section */
.price-section {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

.price-new {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.price-old {
  font-size: 1.25rem;
  color: var(--text-secondary);
  text-decoration: line-through;
}

/* Description */
.description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Features */
.features {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.features-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.features-list li {
  color: var(--text-secondary);
  padding-left: 1.5rem;
  position: relative;
}

.features-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

/* Benefits */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
}

.benefit-item {
  display: flex;
  gap: 1rem;
}

.benefit-icon {
  width: 24px;
  height: 24px;
  color: #10b981;
  flex-shrink: 0;
}

.benefit-item h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.benefit-item p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Action Buttons */
.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.btn-buy,
.btn-chat {
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.btn-buy {
  background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
  color: white;
  border: none;
}

.btn-buy:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

.btn-chat {
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text-primary);
}

.btn-chat:hover {
  border-color: var(--primary);
  color: var(--primary);
}

/* Shop Info */
.shop-info {
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.shop-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.shop-icon {
  width: 48px;
  height: 48px;
  color: var(--primary);
}

.shop-header h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.shop-rating {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0.25rem 0 0 0;
}

.btn-view-shop {
  margin-left: auto;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-view-shop:hover {
  background: var(--primary);
  color: white;
}

/* Reviews Section */
.reviews-section {
  padding-top: 3rem;
  border-top: 1px solid var(--border);
}

.reviews-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.review-card {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.review-header {
  margin-bottom: 1rem;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.reviewer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.reviewer-info h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.review-stars {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.25rem;
}

.review-stars .star {
  color: #fbbf24;
  font-size: 1rem;
}

.review-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 1rem 0;
}

.review-date {
  color: #6b7280;
  font-size: 0.8rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .detail-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-title {
    font-size: 1.5rem;
  }

  .price-new {
    font-size: 1.5rem;
  }

  .action-buttons {
    grid-template-columns: 1fr;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .thumbnail-images {
    grid-template-columns: repeat(3, 1fr);
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
