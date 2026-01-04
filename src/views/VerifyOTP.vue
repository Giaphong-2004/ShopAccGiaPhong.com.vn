<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="shield-icon">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 8L12 16V28C12 42 30 52 30 52C30 52 48 42 48 28V16L30 8Z" fill="#6366f1" opacity="0.2"/>
          <path d="M30 8L12 16V28C12 42 30 52 30 52C30 52 48 42 48 28V16L30 8Z" stroke="#6366f1" stroke-width="2" fill="none"/>
          <circle cx="30" cy="30" r="8" fill="#6366f1"/>
        </svg>
      </div>
      
      <h2 class="auth-title">Xác thực OTP</h2>
      <p class="auth-subtitle">Mã xác thực 6 số đã được gửi đến email/SDT của bạn. Vui lòng kiểm tra hộp thư (bao gồm cả mục Spam).</p>
      
      <form @submit.prevent="handleVerifyOTP" class="auth-form">
        <div class="form-group">
          <label>Nhập mã xác thực</label>
          <input 
            type="text" 
            v-model="otp" 
            maxlength="6"
            class="otp-input"
            placeholder="--•--•--"
            inputmode="numeric"
            @input="validateOTP"
            required
          />
        </div>
        
        <div class="countdown">
          <span>Gửi lại mã sau</span>
          <span class="timer">{{ String(minutes).padStart(2, '0') }}:{{ String(seconds).padStart(2, '0') }}</span>
        </div>
        
        <button type="submit" class="btn-primary" :disabled="loading || otp.length !== 6">
          <span v-if="!loading">Xác nhận</span>
          <span v-else>Đang xử lý...</span>
        </button>
        
        <p class="auth-footer">
          Bạn chưa nhận được mã? 
          <button type="button" @click="resendOTP" class="link">Gửi lại mã</button>
        </p>
        
        <router-link to="/forgot-password" class="back-link">← Quay lại</router-link>
      </form>
      
      <div class="security-badge">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#6366f1">
          <path d="M8 1L2 3.5V7C2 11.5 8 14.5 8 14.5C8 14.5 14 11.5 14 7V3.5L8 1Z"/>
        </svg>
        BAO MẬT THÔNG TIN 100%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerifyOTP',
  data() {
    return {
      otp: '',
      loading: false,
      minutes: 0,
      seconds: 59,
      timerInterval: null
    }
  },
  mounted() {
    this.startCountdown()
  },
  beforeUnmount() {
    this.stopCountdown()
  },
  methods: {
    validateOTP(e) {
      // Only allow numbers
      this.otp = e.target.value.replace(/[^0-9]/g, '').slice(0, 6)
    },
    startCountdown() {
      this.timerInterval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--
        } else if (this.minutes > 0) {
          this.minutes--
          this.seconds = 59
        } else {
          this.stopCountdown()
        }
      }, 1000)
    },
    stopCountdown() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval)
      }
    },
    async handleVerifyOTP() {
      if (this.otp.length !== 6) {
        alert('Vui lòng nhập đầy đủ 6 số OTP')
        return
      }

      this.loading = true
      
      try {
        // TODO: Implement API call to verify OTP
        // await api.post('/auth/verify-otp', {
        //   otp: this.otp
        // })
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        alert('Xác thực OTP thành công!')
        this.$router.push('/login')
      } catch (error) {
        console.error('Error:', error)
        alert('Mã OTP không đúng. Vui lòng thử lại!')
      } finally {
        this.loading = false
      }
    },
    resendOTP() {
      this.otp = ''
      this.minutes = 0
      this.seconds = 59
      this.startCountdown()
      alert('Mã OTP mới đã được gửi!')
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
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
}

.auth-card {
  width: 100%;
  max-width: 480px;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.shield-icon {
  margin-bottom: 2rem;
  animation: slideDown 0.5s ease;
}

.auth-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.auth-subtitle {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
}

.otp-input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1.25rem;
  letter-spacing: 0.5rem;
  text-align: center;
  font-weight: 600;
  outline: none;
  transition: all 0.2s;
}

.otp-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.otp-input::placeholder {
  color: var(--text-secondary);
  opacity: 0.5;
}

.countdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--text-secondary);
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.timer {
  font-weight: 600;
  color: var(--primary);
  font-size: 1rem;
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
  width: 100%;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.auth-footer {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

.link {
  background: none;
  border: none;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0;
}

.link:hover {
  color: #a78bfa;
}

.back-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 1rem;
  display: inline-block;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--primary);
}

.security-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
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

  .otp-input {
    font-size: 1rem;
    letter-spacing: 0.25rem;
  }
}
</style>
