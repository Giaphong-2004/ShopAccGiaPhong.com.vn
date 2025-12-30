<template>
  <div class="snow-container">
    <div 
      v-for="i in snowflakeCount" 
      :key="i" 
      class="snowflake"
      :style="getSnowflakeStyle(i)"
    >
      ❄
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snow',
  data() {
    return {
      snowflakeCount: 50
    }
  },
  methods: {
    getSnowflakeStyle(index) {
      const left = Math.random() * 100
      const animationDuration = 5 + Math.random() * 10
      const animationDelay = Math.random() * 5
      const fontSize = 10 + Math.random() * 10
      const opacity = 0.3 + Math.random() * 0.5
      
      return {
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
        fontSize: `${fontSize}px`,
        opacity: opacity
      }
    }
  }
}
</script>

<style scoped>
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -20px;
  color: rgba(255, 255, 255, 0.8);
  user-select: none;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-20px) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}

/* Responsive - giảm số lượng tuyết trên mobile */
@media (max-width: 768px) {
  .snowflake:nth-child(n+30) {
    display: none;
  }
}
</style>