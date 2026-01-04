<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 32L20 8L32 32H8Z" fill="#6366f1"/>
        </svg>
        <h1>GameStore</h1>
      </div>
      
      <h2 class="auth-title">Quên Mật khẩu?</h2>
      <p class="auth-subtitle">Đừng lo, chúng tôi sẽ giúp bạn khôi phục mật khẩu của mình.</p>
      
      <form @submit.prevent="handleForgotPassword" class="auth-form" v-if="!resetSent">
        <div class="form-group">
          <label>Email hoặc Tên đăng nhập</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <input 
              type="text" 
              v-model="emailOrUsername" 
              placeholder="Nhập email hoặc tên đăng nhập"
              required
            />
          </div>
        </div>
        
        <button type="submit" class="btn-primary" :disabled="loading">
          <span v-if="!loading">Gửi Link Khôi Phục</span>
          <span v-else>Đang xử lý...</span>
        </button>
        
        <p class="auth-footer">
          Nhớ lại mật khẩu? 
          <router-link to="/login" class="link">Đăng nhập</router-link>
        </p>
      </form>

      <!-- Success Message -->
      <div v-else class="success-message">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" class="success-icon">
          <circle cx="30" cy="30" r="28" stroke="#10b981" stroke-width="2"/>
          <path d="M20 30l8 8 12-12" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <h3>Kiểm tra Email của bạn!</h3>
        <p>Chúng tôi đã gửi link khôi phục mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư đến hoặc thư spam.</p>
        
        <div class="action-buttons">
          <button @click="resetSent = false" class="btn-secondary">Gửi lại Email</button>
          <router-link to="/login" class="btn-primary">Quay lại Đăng nhập</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      emailOrUsername: '',
      loading: false,
      resetSent: false
    }
  },
  methods: {
    async handleForgotPassword() {
      this.loading = true
      
      try {
        // TODO: Implement API call to send password reset email
        // await api.post('/auth/forgot-password', {
        //   emailOrUsername: this.emailOrUsername
        // })
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.resetSent = true
      } catch (error) {
        console.error('Error:', error)
        alert('Có lỗi xảy ra. Vui lòng thử lại!')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.auth-card {
  width: 100%;
  max-width: 480px;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.logo h1 {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.auth-title {
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.auth-subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: var(--text-secondary);
  flex-shrink: 0;
}

.form-group input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
}

.form-group input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group input::placeholder {
  color: var(--text-secondary);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, #a78bfa 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.75rem;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--primary);
}

.auth-footer {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

.link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.link:hover {
  color: var(--primary-dark);
}

/* Success Message Styles */
.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.success-icon {
  animation: slideDown 0.5s ease;
}

.success-message h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.success-message p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 0.75rem;
}

.action-buttons button,
.action-buttons a {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.action-buttons .btn-primary {
  margin-top: 0;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }

  .auth-title {
    font-size: 1.5rem;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>
