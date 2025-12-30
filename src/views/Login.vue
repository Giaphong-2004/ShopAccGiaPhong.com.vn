<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 32L20 8L32 32H8Z" fill="#6366f1"/>
        </svg>
        <h1>GameStore</h1>
      </div>
      
      <h2 class="auth-title">Chào mừng trở lại!</h2>
      <p class="auth-subtitle">Đăng nhập để tiếp tục cuộc phiêu lưu của bạn.</p>
      
      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label>Tên đăng nhập hoặc Email</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/>
            </svg>
            <input 
              type="text" 
              v-model="username" 
              placeholder="Nhập tên đăng nhập của bạn"
              required
            />
          </div>
        </div>
        
        <div class="form-group">
          <div class="label-row">
            <label>Mật khẩu</label>
            <router-link to="/forgot-password" class="forgot-link">Quên mật khẩu?</router-link>
          </div>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a5 5 0 00-5 5v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 8V7a3 3 0 10-6 0v3h6z"/>
            </svg>
            <input 
              :type="showPassword ? 'text' : 'password'" 
              v-model="password" 
              placeholder="••••••••"
              required
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword"
              class="toggle-password"
            >
              <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/>
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <button type="submit" class="btn-primary" :disabled="loading">
          <span v-if="!loading">Đăng nhập</span>
          <span v-else>Đang xử lý...</span>
        </button>
        
        <div class="divider">
          <span>Hoặc tiếp tục với</span>
        </div>
        
        <div class="social-buttons">
          <button type="button" class="btn-social" @click="loginWithGoogle">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
              <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
              <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
              <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button type="button" class="btn-social" @click="loginWithFacebook">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
              <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
            </svg>
            Facebook
          </button>
        </div>
        
        <p class="auth-footer">
          Chưa có tài khoản? 
          <router-link to="/register" class="link">Đăng ký ngay</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      try {
        // Giả lập API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Lưu thông tin đăng nhập (trong thực tế sẽ gọi API)
        localStorage.setItem('user', JSON.stringify({
          username: this.username,
          loggedIn: true
        }))
        
        // Chuyển về trang chủ
        this.$router.push('/')
      } catch (error) {
        alert('Đăng nhập thất bại!')
      } finally {
        this.loading = false
      }
    },
    loginWithGoogle() {
      alert('Tính năng đăng nhập Google đang được phát triển')
    },
    loginWithFacebook() {
      alert('Tính năng đăng nhập Facebook đang được phát triển')
    }
  }
}
</script>