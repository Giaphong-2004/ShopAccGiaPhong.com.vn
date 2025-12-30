<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="header-logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 24L16 8L24 24H8Z" fill="#6366f1"/>
        </svg>
        <span>GameStore</span>
      </router-link>

      <!-- Navigation -->
      <nav class="header-nav">
        <a href="#" class="nav-link">Trang chủ</a>
        <a href="#" class="nav-link">Nạp tiền</a>
        <a href="#" class="nav-link">Lịch sử</a>
        <a href="#" class="nav-link">Blog</a>
      </nav>

      <!-- Search & Actions -->
      <div class="header-actions">
        <!-- Search -->
        <div class="search-box">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input 
            type="text" 
            placeholder="Tìm kiếm game..."
            v-model="searchQuery"
          />
        </div>

        <!-- Auth Buttons -->
        <div class="auth-buttons">
          <router-link to="/login" class="btn-login">Đăng nhập</router-link>
          <router-link to="/register" class="btn-register">Đăng ký</router-link>
        </div>

        <!-- User Avatar (when logged in) -->
        <!-- <div class="user-menu">
          <img src="https://via.placeholder.com/40" alt="User" class="user-avatar">
        </div> -->
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <nav class="mobile-nav">
        <a href="#" class="mobile-nav-link">Trang chủ</a>
        <a href="#" class="mobile-nav-link">Nạp tiền</a>
        <a href="#" class="mobile-nav-link">Lịch sử</a>
        <a href="#" class="mobile-nav-link">Blog</a>
      </nav>
      <div class="mobile-auth">
        <router-link to="/login" class="btn-login">Đăng nhập</router-link>
        <router-link to="/register" class="btn-register">Đăng ký</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      mobileMenuOpen: false
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Logo */
.header-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: opacity 0.2s;
}

.header-logo:hover {
  opacity: 0.8;
}

/* Navigation */
.header-nav {
  display: flex;
  gap: 2rem;
  margin-left: auto;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-primary);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Search Box */
.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.875rem;
  color: var(--text-secondary);
  pointer-events: none;
}

.search-box input {
  width: 240px;
  padding: 0.625rem 1rem 0.625rem 2.75rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.875rem;
  transition: all 0.2s;
}

.search-box input::placeholder {
  color: var(--text-secondary);
}

.search-box input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  width: 280px;
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
  gap: 0.75rem;
}

.btn-login {
  padding: 0.625rem 1.5rem;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.btn-login:hover {
  background: var(--primary);
  color: white;
}

.btn-register {
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.btn-register:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

/* User Menu */
.user-menu {
  cursor: pointer;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  transition: transform 0.2s;
}

.user-avatar:hover {
  transform: scale(1.1);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  padding: 1.5rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid var(--border);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.mobile-nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.mobile-nav-link:hover {
  color: var(--text-primary);
}

.mobile-auth {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-menu.active {
  display: block;
}

/* Responsive */
@media (max-width: 1024px) {
  .header-nav {
    display: none;
  }
  
  .search-box input {
    width: 180px;
  }
  
  .search-box input:focus {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1.5rem;
  }
  
  .header-nav,
  .search-box,
  .auth-buttons {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
    margin-left: auto;
  }
}
</style>