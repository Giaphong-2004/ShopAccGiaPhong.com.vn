<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="header-logo">
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
          <!-- Terrifying Demonic Gaming Logo -->
          <defs>
            <linearGradient id="evilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#ff6600;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#cc0000;stop-opacity:1" />
            </linearGradient>
            <filter id="terrifyingGlow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="intenseGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <!-- Left Horn - Bright Red -->
          <path d="M16 8L10 0L14 14C14 18 16 22 20 24Z" fill="#ff0000" stroke="#ff6600" stroke-width="2" filter="url(#terrifyingGlow)"/>
          <path d="M16 8L14 12L18 18" fill="#ffaa00"/>
          
          <!-- Right Horn - Bright Red -->
          <path d="M48 8L54 0L50 14C50 18 48 22 44 24Z" fill="#ff0000" stroke="#ff6600" stroke-width="2" filter="url(#terrifyingGlow)"/>
          <path d="M48 8L50 12L46 18" fill="#ffaa00"/>
          
          <!-- Left Eye - Acid Green & Blood Red -->
          <circle cx="22" cy="28" r="5" fill="#ff0000" filter="url(#intenseGlow)"/>
          <circle cx="22" cy="28" r="3.5" fill="#00ff00"/>
          <circle cx="22" cy="28" r="2" fill="#000"/>
          <circle cx="21.5" cy="27" r="0.8" fill="#ffff00"/>
          
          <!-- Right Eye - Acid Green & Blood Red -->
          <circle cx="42" cy="28" r="5" fill="#ff0000" filter="url(#intenseGlow)"/>
          <circle cx="42" cy="28" r="3.5" fill="#00ff00"/>
          <circle cx="42" cy="28" r="2" fill="#000"/>
          <circle cx="41.5" cy="27" r="0.8" fill="#ffff00"/>
          
          <!-- Demon Fangs -->
          <path d="M28 42L26 48L30 42Z" fill="#00ff00" stroke="#ffaa00" stroke-width="1"/>
          <path d="M36 42L38 48L34 42Z" fill="#00ff00" stroke="#ffaa00" stroke-width="1"/>
          
          <!-- Main Demon Head -->
          <path d="M32 24C16 26 8 38 8 52C8 60 18 64 32 64C46 64 56 60 56 52C56 38 48 26 32 24Z" 
                fill="url(#evilGradient)" stroke="#ff6600" stroke-width="2.5"/>
          
          <!-- Menacing Spikes around the head -->
          <path d="M12 50L6 48M20 56L14 60M44 56L50 60M52 50L58 48" stroke="#ffaa00" stroke-width="2.5" stroke-linecap="round" filter="url(#terrifyingGlow)"/>
          
          <!-- Central Power Core - Pulsing Energy -->
          <circle cx="32" cy="46" r="6" fill="#00ff00" opacity="0.6" filter="url(#intenseGlow)"/>
          <circle cx="32" cy="46" r="4" fill="#ff0000"/>
          <circle cx="32" cy="46" r="2.5" fill="#ffff00"/>
          <path d="M32 42V50M28 46H36" stroke="#00ff00" stroke-width="2" stroke-linecap="round" filter="url(#terrifyingGlow)"/>
          
          <!-- Dark Aura -->
          <circle cx="32" cy="46" r="14" fill="none" stroke="#ff0000" stroke-width="1.5" opacity="0.5" stroke-dasharray="3,2" filter="url(#terrifyingGlow)"/>
          <circle cx="32" cy="46" r="16" fill="none" stroke="#00ff00" stroke-width="1" opacity="0.3" stroke-dasharray="2,3"/>
        </svg>
        <span>DGP 2004</span>
      </router-link>

      <!-- Navigation -->
      <nav class="header-nav">
        <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Trang chủ</router-link>
        <router-link to="/topup" class="nav-link" :class="{ active: $route.path === '/topup' }">Nạp tiền</router-link>
        <router-link to="/history" class="nav-link" :class="{ active: $route.path === '/history' }">Lịch sử</router-link>
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
        <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Trang chủ</router-link>
        <router-link to="/topup" class="mobile-nav-link" @click="mobileMenuOpen = false">Nạp tiền</router-link>
        <router-link to="/history" class="mobile-nav-link" @click="mobileMenuOpen = false">Lịch sử</router-link>
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
  transition: all 0.2s;
  padding: 0.5rem;
  border-radius: 8px;
}

.header-logo:hover {
  opacity: 1;
  background: rgba(255, 0, 0, 0.15);
  transform: scale(1.05);
}

.header-logo span {
  flex-shrink: 0;
  animation: rainbowText 4s linear infinite, bounceUpDown 1.2s ease-in-out infinite;
}

.header-logo:hover span {
  animation: rainbowTextIntense 2s linear infinite, bounceUpDownFast 0.8s ease-in-out infinite;
}

.header-logo svg {
  flex-shrink: 0;
  animation: rainbowGlow 4s linear infinite, demonRotate 8s linear infinite, bounceUpDown 1.2s ease-in-out infinite;
}

.header-logo:hover svg {
  animation: rainbowIntenseGlow 2s linear infinite, demonRotate 4s linear infinite, bounceUpDownFast 0.8s ease-in-out infinite;
}

/* Animations */
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

@keyframes rainbowTextIntense {
  0% {
    color: #ff0000;
    text-shadow: 0 0 15px rgba(255, 0, 0, 1), 0 0 25px rgba(255, 0, 0, 0.6);
  }
  14% {
    color: #ff6600;
    text-shadow: 0 0 15px rgba(255, 102, 0, 1), 0 0 25px rgba(255, 102, 0, 0.6);
  }
  28% {
    color: #ffff00;
    text-shadow: 0 0 15px rgba(255, 255, 0, 1), 0 0 25px rgba(255, 255, 0, 0.6);
  }
  42% {
    color: #00ff00;
    text-shadow: 0 0 15px rgba(0, 255, 0, 1), 0 0 25px rgba(0, 255, 0, 0.6);
  }
  57% {
    color: #0099ff;
    text-shadow: 0 0 15px rgba(0, 153, 255, 1), 0 0 25px rgba(0, 153, 255, 0.6);
  }
  71% {
    color: #9933ff;
    text-shadow: 0 0 15px rgba(153, 51, 255, 1), 0 0 25px rgba(153, 51, 255, 0.6);
  }
  85% {
    color: #ff00ff;
    text-shadow: 0 0 15px rgba(255, 0, 255, 1), 0 0 25px rgba(255, 0, 255, 0.6);
  }
  100% {
    color: #ff0000;
    text-shadow: 0 0 15px rgba(255, 0, 0, 1), 0 0 25px rgba(255, 0, 0, 0.6);
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

@keyframes rainbowIntenseGlow {
  0% {
    filter: drop-shadow(0 0 15px rgba(255, 0, 0, 1)) drop-shadow(0 0 25px rgba(255, 0, 0, 0.6));
  }
  14% {
    filter: drop-shadow(0 0 15px rgba(255, 102, 0, 1)) drop-shadow(0 0 25px rgba(255, 102, 0, 0.6));
  }
  28% {
    filter: drop-shadow(0 0 15px rgba(255, 255, 0, 1)) drop-shadow(0 0 25px rgba(255, 255, 0, 0.6));
  }
  42% {
    filter: drop-shadow(0 0 15px rgba(0, 255, 0, 1)) drop-shadow(0 0 25px rgba(0, 255, 0, 0.6));
  }
  57% {
    filter: drop-shadow(0 0 15px rgba(0, 153, 255, 1)) drop-shadow(0 0 25px rgba(0, 153, 255, 0.6));
  }
  71% {
    filter: drop-shadow(0 0 15px rgba(153, 51, 255, 1)) drop-shadow(0 0 25px rgba(153, 51, 255, 0.6));
  }
  85% {
    filter: drop-shadow(0 0 15px rgba(255, 0, 255, 1)) drop-shadow(0 0 25px rgba(255, 0, 255, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 15px rgba(255, 0, 0, 1)) drop-shadow(0 0 25px rgba(255, 0, 0, 0.6));
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

@keyframes bounceUpDownFast {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
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

.nav-link.active {
  color: var(--primary);
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