<template>
  <div class="dashboard-page">
    <div class="container">
      <!-- Header -->
      <div class="dashboard-header">
        <div class="header-content">
          <h1 class="page-title">Chỉ số cốt lõi</h1>
          <p class="page-subtitle">Tổng hợp tình hình kinh doanh trong tháng</p>
        </div>
        <div class="period-selector">
          <button class="period-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>30 ngày qua</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <!-- Stat Card 1 -->
        <div class="stat-card">
          <div class="stat-icon" style="background: rgba(139, 92, 246, 0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
          <div class="stat-info">
            <p class="stat-label">TÀI KHOẢN ĐÃ BÁN</p>
            <h2 class="stat-value">342</h2>
            <p class="stat-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
              <span>Đạt 86% mục tiêu tháng</span>
            </p>
          </div>
          <div class="stat-badge positive">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            <span>+12%</span>
          </div>
        </div>

        <!-- Stat Card 2 -->
        <div class="stat-card">
          <div class="stat-icon" style="background: rgba(59, 130, 246, 0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div class="stat-info">
            <p class="stat-label">NGƯỜI DÙNG MỚI</p>
            <h2 class="stat-value">85</h2>
            <p class="stat-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
              <span>Tăng trưởng ổn định</span>
            </p>
          </div>
          <div class="stat-badge positive">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            <span>+8.2%</span>
          </div>
        </div>

        <!-- Stat Card 3 -->
        <div class="stat-card">
          <div class="stat-icon" style="background: rgba(236, 72, 153, 0.2);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2">
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
            </svg>
          </div>
          <div class="stat-info">
            <p class="stat-label">SỐ KEY ĐÃ BÁN</p>
            <h2 class="stat-value">1,205</h2>
            <p class="stat-change positive">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
              <span>Sản phẩm bán chạy nhất</span>
            </p>
          </div>
          <div class="stat-badge positive">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            <span>+24%</span>
          </div>
        </div>
      </div>

      <!-- Additional Stats -->
      <div class="additional-stats">
        <!-- Revenue Chart -->
        <div class="chart-card">
          <div class="card-header">
            <h3 class="card-title">Doanh thu theo tháng</h3>
            <button class="card-action">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
              </svg>
            </button>
          </div>
          <div class="chart-placeholder">
            <div class="chart-bars">
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 80%"></div>
              <div class="bar" style="height: 45%"></div>
              <div class="bar" style="height: 90%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 95%"></div>
              <div class="bar" style="height: 65%"></div>
            </div>
            <div class="chart-labels">
              <span>T1</span>
              <span>T2</span>
              <span>T3</span>
              <span>T4</span>
              <span>T5</span>
              <span>T6</span>
              <span>T7</span>
            </div>
          </div>
        </div>

        <!-- Top Products -->
        <div class="top-products-card">
          <div class="card-header">
            <h3 class="card-title">Game bán chạy</h3>
            <button class="card-action">Xem tất cả →</button>
          </div>
          <div class="products-list">
            <div class="product-item">
              <div class="product-rank">1</div>
              <div class="product-info">
                <p class="product-name">Liên Quân Mobile</p>
                <p class="product-sales">342 tài khoản</p>
              </div>
              <div class="product-trend positive">+12%</div>
            </div>
            <div class="product-item">
              <div class="product-rank">2</div>
              <div class="product-info">
                <p class="product-name">Free Fire</p>
                <p class="product-sales">289 tài khoản</p>
              </div>
              <div class="product-trend positive">+8%</div>
            </div>
            <div class="product-item">
              <div class="product-rank">3</div>
              <div class="product-info">
                <p class="product-name">PUBG Mobile</p>
                <p class="product-sales">215 tài khoản</p>
              </div>
              <div class="product-trend negative">-3%</div>
            </div>
            <div class="product-item">
              <div class="product-rank">4</div>
              <div class="product-info">
                <p class="product-name">Genshin Impact</p>
                <p class="product-sales">178 tài khoản</p>
              </div>
              <div class="product-trend positive">+15%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  padding: 6rem 0 4rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.page-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
}

.period-selector {
  display: flex;
  gap: 0.5rem;
}

.period-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.period-btn:hover {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  position: relative;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-change {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.stat-change.positive {
  color: #10b981;
}

.stat-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.stat-badge.positive {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.stat-badge.negative {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

/* Additional Stats */
.additional-stats {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.chart-card,
.top-products-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card-action {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.card-action:hover {
  color: var(--primary);
}

/* Chart */
.chart-placeholder {
  height: 280px;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 240px;
  padding: 0 1rem;
  gap: 1rem;
}

.bar {
  flex: 1;
  background: linear-gradient(180deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: 8px 8px 0 0;
  transition: all 0.3s;
  cursor: pointer;
}

.bar:hover {
  opacity: 0.8;
  transform: translateY(-4px);
}

.chart-labels {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Products List */
.products-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.4);
  border-radius: 12px;
  transition: all 0.2s;
}

.product-item:hover {
  background: rgba(15, 23, 42, 0.6);
}

.product-rank {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.875rem;
}

.product-info {
  flex: 1;
}

.product-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.product-sales {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.product-trend {
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
}

.product-trend.positive {
  color: #10b981;
  background: rgba(16, 185, 129, 0.15);
}

.product-trend.negative {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.15);
}

/* Responsive */
@media (max-width: 1024px) {
  .additional-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-value {
    font-size: 2rem;
  }
}
</style>