<template>
  <div class="topup-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Nạp Thẻ & Thanh Toán</h1>
        <p class="hero-subtitle">
          Nạp tiền vào tài khoản một cách nhanh chóng và an toàn với nhiều phương thức tiện lợi.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="payment-section">
      <div class="container">
        <div class="payment-grid">
          <!-- Left Column - Card Top-up -->
          <div class="payment-card">
            <h2 class="payment-card-title">Nạp Thẻ</h2>
            
            <!-- Step 1: Choose Network -->
            <div class="step-section">
              <h3 class="step-title">1. Chọn nhà mạng</h3>
              <div class="network-buttons">
                <button 
                  v-for="network in networks" 
                  :key="network.id"
                  :class="['network-btn', { active: selectedNetwork === network.id }]"
                  @click="selectedNetwork = network.id"
                >
                  <div class="network-logo" :style="{ backgroundColor: network.color }">
                    <span>{{ network.name.charAt(0) }}</span>
                  </div>
                  <span>{{ network.name }}</span>
                </button>
              </div>
            </div>

            <!-- Step 2: Choose Denomination -->
            <div class="step-section">
              <h3 class="step-title">2. Chọn mệnh giá</h3>
              <div class="denomination-buttons">
                <button 
                  v-for="amount in denominations" 
                  :key="amount"
                  :class="['denomination-btn', { active: selectedAmount === amount }]"
                  @click="selectedAmount = amount"
                >
                  {{ formatCurrency(amount) }}
                </button>
              </div>
            </div>

            <!-- Step 3: Enter Card Info -->
            <div class="step-section">
              <h3 class="step-title">3. Nhập thông tin thẻ</h3>
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-input"
                  placeholder="Nhập mã số thẻ"
                  v-model="cardNumber"
                />
              </div>
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-input"
                  placeholder="Nhập số serial"
                  v-model="serialNumber"
                />
              </div>
              <button 
                class="btn-topup"
                :disabled="!canSubmit"
                @click="handleTopUp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                <span>NẠP THẺ</span>
              </button>
            </div>
          </div>

          <!-- Right Column - Other Payment Methods -->
          <div class="payment-methods">
            <!-- Bank QR Code -->
            <div class="payment-card">
              <h2 class="payment-card-title">Quét mã QR chuyển khoản</h2>
              <div class="qr-container">
                <div class="qr-code">
                  <img src="https://img.vietqr.io/image/MB-0369620631-compact2.png" alt="VietQR Code" />
                </div>
                <p class="qr-instruction">
                  Quét mã QR bằng ứng dụng ngân hàng để thanh toán.
                </p>
                <p class="transfer-content">
                  Nội dung chuyển khoản: <strong>NAP {{ accountName }}</strong>
                </p>
              </div>
            </div>

            <!-- Bank Transfer -->
            <div class="payment-card">
              <h2 class="payment-card-title">Chuyển khoản ngân hàng</h2>
              <div class="bank-info">
                <div class="bank-detail">
                  <span class="bank-label">Ngân hàng:</span>
                  <span class="bank-value">MB Bank</span>
                </div>
                <div class="bank-detail">
                  <span class="bank-label">Số tài khoản:</span>
                  <span class="bank-value">0369 620 631</span>
                </div>
                <div class="bank-detail">
                  <span class="bank-label">Chủ tài khoản:</span>
                  <span class="bank-value">DO GIA PHONG</span>
                </div>
                <div class="transfer-content">
                  Nội dung chuyển khoản: <strong>NAP {{ accountName }}</strong>
                </div>
              </div>
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
  name: 'TopUp',
  data() {
    return {
      selectedNetwork: null,
      selectedAmount: null,
      cardNumber: '',
      serialNumber: '',
      accountName: 'Tên tài khoản',
      networks: [
        { id: 'viettel', name: 'Viettel', color: '#00a859' },
        { id: 'mobifone', name: 'Mobifone', color: '#0066cc' },
        { id: 'vinaphone', name: 'Vinaphone', color: '#e60012' },
        { id: 'garena', name: 'Garena', color: '#00a859' }
      ],
      denominations: [10000, 20000, 50000, 100000, 200000, 500000]
    }
  },
  computed: {
    canSubmit() {
      return this.selectedNetwork && 
             this.selectedAmount && 
             this.cardNumber.trim() !== '' && 
             this.serialNumber.trim() !== ''
    }
  },
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      }).format(amount)
    },
    handleTopUp() {
      if (this.canSubmit) {
        // Handle top-up logic here
        alert(`Nạp thẻ thành công!\nNhà mạng: ${this.networks.find(n => n.id === this.selectedNetwork).name}\nMệnh giá: ${this.formatCurrency(this.selectedAmount)}`)
        // Reset form
        this.selectedNetwork = null
        this.selectedAmount = null
        this.cardNumber = ''
        this.serialNumber = ''
      }
    }
  }
}
</script>

<style scoped>
.topup-page {
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

/* Payment Section */
.payment-section {
  padding: 2rem 0;
}

.payment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.payment-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.payment-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

/* Step Section */
.step-section {
  margin-bottom: 2rem;
}

.step-section:last-child {
  margin-bottom: 0;
}

.step-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

/* Network Buttons */
.network-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.network-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.network-btn:hover {
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
}

.network-btn.active {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.2);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.network-logo {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
}

/* Denomination Buttons */
.denomination-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.denomination-btn {
  padding: 0.875rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.denomination-btn:hover {
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
}

.denomination-btn.active {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.2);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

/* Form Inputs */
.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all 0.2s;
}

.form-input::placeholder {
  color: var(--text-secondary);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

/* Top-up Button */
.btn-topup {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn-topup:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.btn-topup:active:not(:disabled) {
  transform: translateY(0);
}

.btn-topup:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Payment Methods */
.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* QR Code Container */
.qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.qr-code {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code img {
  width: 200px;
  height: 200px;
  display: block;
}

.qr-instruction {
  color: var(--text-secondary);
  font-size: 0.875rem;
  text-align: center;
  margin: 0;
}

.transfer-content {
  color: var(--text-secondary);
  font-size: 0.875rem;
  text-align: center;
  margin: 0;
}

.transfer-content strong {
  color: var(--primary);
}

/* Bank Info */
.bank-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bank-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.bank-detail:last-of-type {
  border-bottom: none;
}

.bank-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.bank-value {
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 600;
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
  .payment-grid {
    grid-template-columns: 1fr;
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
  
  .network-buttons {
    grid-template-columns: 1fr;
  }
  
  .denomination-buttons {
    grid-template-columns: repeat(2, 1fr);
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
  
  .payment-card {
    padding: 1.5rem;
  }
  
  .denomination-buttons {
    grid-template-columns: 1fr;
  }
}
</style>
