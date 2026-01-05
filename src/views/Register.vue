<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="logo">
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="evilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#ff6600;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#cc0000;stop-opacity:1" />
            </linearGradient>
            <filter id="terrifyingGlow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <filter id="intenseGlow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <path d="M16 8L10 0L14 14C14 18 16 22 20 24Z" fill="#ff0000" stroke="#ff6600" stroke-width="2" filter="url(#terrifyingGlow)"/>
          <path d="M48 8L54 0L50 14C50 18 48 22 44 24Z" fill="#ff0000" stroke="#ff6600" stroke-width="2" filter="url(#terrifyingGlow)"/>
          <circle cx="22" cy="28" r="5" fill="#ff0000" filter="url(#intenseGlow)"/><circle cx="22" cy="28" r="3.5" fill="#00ff00"/><circle cx="22" cy="28" r="2" fill="#000"/>
          <circle cx="42" cy="28" r="5" fill="#ff0000" filter="url(#intenseGlow)"/><circle cx="42" cy="28" r="3.5" fill="#00ff00"/><circle cx="42" cy="28" r="2" fill="#000"/>
          <path d="M28 42L26 48L30 42Z" fill="#00ff00"/><path d="M36 42L38 48L34 42Z" fill="#00ff00"/>
          <path d="M32 24C16 26 8 38 8 52C8 60 18 64 32 64C46 64 56 60 56 52C56 38 48 26 32 24Z" fill="url(#evilGradient)" stroke="#ff6600" stroke-width="2.5"/>
          <circle cx="32" cy="46" r="6" fill="#00ff00" opacity="0.6" filter="url(#intenseGlow)"/><circle cx="32" cy="46" r="4" fill="#ff0000"/><circle cx="32" cy="46" r="2.5" fill="#ffff00"/>
        </svg>
        <h1>DGP 2004</h1>
      </div>
      
      <h2 class="auth-title">Tạo tài khoản mới</h2>
      <p class="auth-subtitle">Bắt đầu hành trình game của bạn ngay hôm nay.</p>
      
      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label>Tên tài khoản</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/>
            </svg>
            <input 
              type="text" 
              v-model="username" 
              placeholder="Nhập tên tài khoản của bạn"
              required
              minlength="3"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label>Email</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <input 
              type="email" 
              v-model="email" 
              placeholder="Nhập địa chỉ email"
              required
            />
          </div>
        </div>
        
        <div class="form-group">
          <label>Mật khẩu</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a5 5 0 00-5 5v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 8V7a3 3 0 10-6 0v3h6z"/>
            </svg>
            <input 
              :type="showPassword ? 'text' : 'password'" 
              v-model="password" 
              placeholder="Tạo mật khẩu mạnh"
              required
              minlength="6"
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
        
        <div class="form-group">
          <label>Xác nhận mật khẩu</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a5 5 0 00-5 5v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 8V7a3 3 0 10-6 0v3h6z"/>
            </svg>
            <input 
              :type="showConfirmPassword ? 'text' : 'password'" 
              v-model="confirmPassword" 
              placeholder="Nhập lại mật khẩu"
              required
            />
            <button 
              type="button" 
              @click="showConfirmPassword = !showConfirmPassword"
              class="toggle-password"
            >
              <svg v-if="!showConfirmPassword" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"/>
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
              </svg>
            </button>
          </div>
          <p v-if="password && confirmPassword && password !== confirmPassword" class="error-text">
            Mật khẩu không khớp
          </p>
        </div>
        
        <div class="checkbox-group">
          <input type="checkbox" id="terms" v-model="agreedToTerms" required />
          <label for="terms">
            Tôi đồng ý với <router-link to="/terms" class="link">Điều khoản dịch vụ</router-link>
          </label>
        </div>
        
        <button type="submit" class="btn-primary" :disabled="loading || !isValid">
          <span v-if="!loading">Đăng ký</span>
          <span v-else>Đang xử lý...</span>
        </button>
        
        <p class="auth-footer">
          Đã có tài khoản? 
          <router-link to="/login" class="link">Đăng nhập tại đây</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      agreedToTerms: false,
      loading: false
    }
  },
  computed: {
    isValid() {
      return this.username.length >= 3 &&
             this.email.includes('@') &&
             this.password.length >= 6 &&
             this.password === this.confirmPassword &&
             this.agreedToTerms
    }
  },
  methods: {
    async handleRegister() {
      if (!this.isValid) {
        alert('Vui lòng điền đầy đủ thông tin hợp lệ')
        return
      }
      
      this.loading = true
      try {
        // Giả lập API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Lưu thông tin (trong thực tế sẽ gọi API)
        localStorage.setItem('user', JSON.stringify({
          username: this.username,
          email: this.email,
          loggedIn: true
        }))
        
        alert('Đăng ký thành công!')
        // Chuyển về trang đăng nhập hoặc trang chủ
        this.$router.push('/login')
      } catch (error) {
        alert('Đăng ký thất bại! Vui lòng thử lại.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.logo svg {
  animation: rainbowGlow 4s linear infinite, demonRotate 8s linear infinite, bounceUpDown 1.2s ease-in-out infinite;
}

.logo h1 {
  font-size: 1.75rem;
  font-weight: 700;
  animation: rainbowText 4s linear infinite, bounceUpDown 1.2s ease-in-out infinite;
  background: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes rainbowText {
  0% {
    color: #ff0000;
    text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
  }
  14% {
    color: #ff6600;
    text-shadow: 0 0 8px rgba(255, 102, 0, 0.6);
  }
  28% {
    color: #ffff00;
    text-shadow: 0 0 8px rgba(255, 255, 0, 0.6);
  }
  42% {
    color: #00ff00;
    text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
  }
  57% {
    color: #0099ff;
    text-shadow: 0 0 8px rgba(0, 153, 255, 0.6);
  }
  71% {
    color: #9933ff;
    text-shadow: 0 0 8px rgba(153, 51, 255, 0.6);
  }
  85% {
    color: #ff00ff;
    text-shadow: 0 0 8px rgba(255, 0, 255, 0.6);
  }
  100% {
    color: #ff0000;
    text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
  }
}

@keyframes rainbowGlow {
  0% {
    filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.8));
  }
  14% {
    filter: drop-shadow(0 0 8px rgba(255, 102, 0, 0.8));
  }
  28% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 0, 0.8));
  }
  42% {
    filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.8));
  }
  57% {
    filter: drop-shadow(0 0 8px rgba(0, 153, 255, 0.8));
  }
  71% {
    filter: drop-shadow(0 0 8px rgba(153, 51, 255, 0.8));
  }
  85% {
    filter: drop-shadow(0 0 8px rgba(255, 0, 255, 0.8));
  }
  100% {
    filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.8));
  }
}

@keyframes bounceUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes demonRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>