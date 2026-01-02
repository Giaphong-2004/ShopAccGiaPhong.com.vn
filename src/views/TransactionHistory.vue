<template>
  <div class="history-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Lịch sử Giao dịch</h1>
        <p class="hero-subtitle">
          Theo dõi chi tiết trạng thái các giao dịch nạp thẻ và mua tài khoản của bạn.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="history-section">
      <div class="container">
        <!-- Filter Section -->
        <div class="filter-section">
          <div class="filter-inputs">
            <div class="input-wrapper">
              <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <input 
                type="text" 
                placeholder="mm/dd/yyyy"
                v-model="filterDate"
                class="filter-input"
              />
            </div>
            <div class="input-wrapper">
              <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input 
                type="text" 
                placeholder="Mã giao dịch..."
                v-model="filterTransactionId"
                class="filter-input"
              />
            </div>
            <button class="btn-search" @click="handleSearch">
              Tìm kiếm
            </button>
          </div>
        </div>

        <!-- Transaction Table -->
        <div class="table-container">
          <table class="transaction-table">
            <thead>
              <tr>
                <th>MÃ GD</th>
                <th>THỜI GIAN</th>
                <th>LOẠI GIAO DỊCH</th>
                <th>NỘI DUNG / CHI TIẾT</th>
                <th>GIÁ TRỊ</th>
                <th>TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in paginatedTransactions" :key="transaction.id">
                <td class="transaction-id">{{ transaction.id }}</td>
                <td class="transaction-time">{{ transaction.time }}</td>
                <td class="transaction-type">
                  <div class="type-wrapper">
                    <span v-html="getTypeIcon(transaction.typeIcon)" class="type-icon"></span>
                    <span>{{ transaction.type }}</span>
                  </div>
                </td>
                <td class="transaction-details">{{ transaction.details }}</td>
                <td class="transaction-value" :class="{ positive: transaction.value > 0, negative: transaction.value < 0 }">
                  {{ formatValue(transaction.value) }}
                </td>
                <td class="transaction-status">
                  <span :class="['status-badge', `status-${transaction.status}`]">
                    <span class="status-dot"></span>
                    {{ transaction.statusText }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination-section">
          <p class="pagination-info">
            Hiển thị {{ startIndex + 1 }} đến {{ endIndex }} của {{ totalTransactions }} giao dịch
          </p>
          <div class="pagination-controls">
            <button 
              class="pagination-btn" 
              :disabled="currentPage === 1"
              @click="goToPage(currentPage - 1)"
            >
              &lt; Trước
            </button>
            <button 
              v-for="page in totalPages" 
              :key="page"
              :class="['pagination-btn', 'pagination-number', { active: currentPage === page }]"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
            <button 
              class="pagination-btn" 
              :disabled="currentPage === totalPages"
              @click="goToPage(currentPage + 1)"
            >
              Sau &gt;
            </button>
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
  name: 'TransactionHistory',
  data() {
    return {
      filterDate: '',
      filterTransactionId: '',
      currentPage: 1,
      itemsPerPage: 5,
      transactions: [
        {
          id: '#TRX-9923',
          time: '25/05/2024 19:30',
          type: 'Mua Tài Khoản',
          typeIcon: 'ShoppingBagIcon',
          details: 'Acc Liên Quân - Rank Cao Thủ',
          value: -500000,
          status: 'success',
          statusText: 'Thành công'
        },
        {
          id: '#TRX-9820',
          time: '24/05/2024 10:15',
          type: 'Nạp Thẻ',
          typeIcon: 'CreditCardIcon',
          details: 'Viettel (Serial: 12348273...)',
          value: 100000,
          status: 'success',
          statusText: 'Thành công'
        },
        {
          id: '#TRX-9819',
          time: '23/05/2024 22:45',
          type: 'Nạp ATM/Momo',
          typeIcon: 'BankIcon',
          details: 'Chuyển khoản MB Bank',
          value: 200000,
          status: 'processing',
          statusText: 'Đang xử lý'
        },
        {
          id: '#TRX-9705',
          time: '23/05/2024 15:20',
          type: 'Mua Robux',
          typeIcon: 'GameControllerIcon',
          details: 'Gói 800 Robux (ID: User123)',
          value: -150000,
          status: 'success',
          statusText: 'Thành công'
        },
        {
          id: '#TRX-9620',
          time: '22/05/2024 09:20',
          type: 'Nạp Thẻ',
          typeIcon: 'CreditCardIcon',
          details: 'Mobifone (Thẻ sai/đã sử dụng)',
          value: 0,
          status: 'failed',
          statusText: 'Thất bại'
        },
        {
          id: '#TRX-9601',
          time: '21/05/2024 16:30',
          type: 'Mua Tài Khoản',
          typeIcon: 'ShoppingBagIcon',
          details: 'Acc Free Fire - Vàng I',
          value: -300000,
          status: 'success',
          statusText: 'Thành công'
        },
        {
          id: '#TRX-9550',
          time: '20/05/2024 14:15',
          type: 'Nạp Thẻ',
          typeIcon: 'CreditCardIcon',
          details: 'Vinaphone (Serial: 98765432...)',
          value: 50000,
          status: 'success',
          statusText: 'Thành công'
        },
        {
          id: '#TRX-9500',
          time: '19/05/2024 11:00',
          type: 'Nạp ATM/Momo',
          typeIcon: 'BankIcon',
          details: 'Chuyển khoản Momo',
          value: 500000,
          status: 'processing',
          statusText: 'Đang xử lý'
        },
        {
          id: '#TRX-9450',
          time: '18/05/2024 20:45',
          type: 'Mua Tài Khoản',
          typeIcon: 'ShoppingBagIcon',
          details: 'Acc Roblox - Premium',
          value: -250000,
          status: 'success',
          statusText: 'Thành công'
        },
        {
          id: '#TRX-9400',
          time: '17/05/2024 08:30',
          type: 'Nạp Thẻ',
          typeIcon: 'CreditCardIcon',
          details: 'Garena (Serial: 11112222...)',
          value: 200000,
          status: 'success',
          statusText: 'Thành công'
        }
      ]
    }
  },
  computed: {
    filteredTransactions() {
      let result = this.transactions

      if (this.filterDate) {
        // Filter by date logic would go here
      }

      if (this.filterTransactionId) {
        result = result.filter(t => 
          t.id.toLowerCase().includes(this.filterTransactionId.toLowerCase())
        )
      }

      return result
    },
    totalTransactions() {
      return this.filteredTransactions.length
    },
    totalPages() {
      return Math.ceil(this.totalTransactions / this.itemsPerPage)
    },
    paginatedTransactions() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredTransactions.slice(start, end)
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage
    },
    endIndex() {
      return Math.min(this.startIndex + this.itemsPerPage, this.totalTransactions)
    }
  },
  methods: {
    formatValue(value) {
      if (value === 0) return '0₫'
      const sign = value > 0 ? '+' : '-'
      const formatted = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      }).format(Math.abs(value))
      return `${sign} ${formatted}`
    },
    handleSearch() {
      this.currentPage = 1
      // Additional search logic can be added here
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    getTypeIcon(iconType) {
      const icons = {
        ShoppingBagIcon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
        CreditCardIcon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        BankIcon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><line x1="12" y1="7" x2="12" y2="21"/><line x1="2" y1="11" x2="22" y2="11"/><line x1="2" y1="15" x2="22" y2="15"/><line x1="2" y1="19" x2="22" y2="19"/></svg>',
        GameControllerIcon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h4m-2-2v4m8-6h.01M18 12h.01M6.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5zM12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z"/></svg>'
      }
      return icons[iconType] || icons.CreditCardIcon
    }
  }
}
</script>

<style scoped>
.history-page {
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
  padding: 6rem 0 3rem;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* History Section */
.history-section {
  padding: 2rem 0;
}

/* Filter Section */
.filter-section {
  margin-bottom: 2rem;
}

.filter-inputs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: var(--text-secondary);
  pointer-events: none;
}

.filter-input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all 0.2s;
}

.filter-input::placeholder {
  color: var(--text-secondary);
}

.filter-input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.btn-search {
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  white-space: nowrap;
}

.btn-search:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.btn-search:active {
  transform: translateY(0);
}

/* Table Container */
.table-container {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.transaction-table {
  width: 100%;
  border-collapse: collapse;
}

.transaction-table thead {
  background: rgba(15, 23, 42, 0.6);
}

.transaction-table th {
  padding: 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border);
}

.transaction-table tbody tr {
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}

.transaction-table tbody tr:hover {
  background: rgba(99, 102, 241, 0.05);
}

.transaction-table tbody tr:last-child {
  border-bottom: none;
}

.transaction-table td {
  padding: 1rem;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.transaction-id {
  font-weight: 600;
  color: var(--primary);
  font-family: monospace;
}

.transaction-time {
  color: var(--text-secondary);
  white-space: nowrap;
}

.transaction-type {
  white-space: nowrap;
}

.type-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.type-icon {
  color: var(--primary);
  flex-shrink: 0;
}

.transaction-details {
  max-width: 300px;
  color: var(--text-secondary);
}

.transaction-value {
  font-weight: 600;
  white-space: nowrap;
}

.transaction-value.positive {
  color: #10b981;
}

.transaction-value.negative {
  color: #ef4444;
}

.transaction-status {
  white-space: nowrap;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.status-success {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.status-success .status-dot {
  background: #10b981;
}

.status-processing {
  background: rgba(249, 115, 22, 0.2);
  color: #f97316;
}

.status-processing .status-dot {
  background: #f97316;
}

.status-failed {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.status-failed .status-dot {
  background: #ef4444;
}

/* Pagination */
.pagination-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.pagination-info {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.pagination-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.pagination-btn {
  padding: 0.625rem 1rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 40px;
}

.pagination-btn:hover:not(:disabled) {
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-number.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
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
@media (max-width: 1024px) {
  .transaction-table {
    font-size: 0.875rem;
  }
  
  .transaction-table th,
  .transaction-table td {
    padding: 0.75rem;
  }
  
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .filter-inputs {
    flex-direction: column;
  }
  
  .input-wrapper {
    min-width: 100%;
  }
  
  .table-container {
    overflow-x: auto;
  }
  
  .transaction-table {
    min-width: 800px;
  }
  
  .pagination-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .transaction-table th,
  .transaction-table td {
    padding: 0.5rem;
    font-size: 0.75rem;
  }
  
  .pagination-controls {
    flex-wrap: wrap;
  }
}
</style>
