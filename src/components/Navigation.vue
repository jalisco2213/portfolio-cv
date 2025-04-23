<script setup>
import { ref } from 'vue'

const isHovered = ref(false)

const socialIcons = [
  { name: 'github', url: 'https://github.com/jalisco2213' },
  { name: 'discord', url: 'https://discord.com/users/325196577624817674' },
]
</script>

<template>
  <div class="navigation-menu" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="line" :class="{ 'hover-effect': isHovered }"></div>

    <div class="social-icons">
      <a v-for="icon in socialIcons" :key="icon.name" :href="icon.url" target="_blank" rel="noopener noreferrer">
        <img :src="`/social/${icon.name}.svg`" :alt="icon.name" class="social-icon"
          :class="{ 'hover-effect': isHovered }">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-menu {
  position: fixed;
  top: -30px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  padding: 10px;

  .line {
    margin: 0 auto;
    width: 1px;
    height: 120px;
    background: var(--line-color);
    transition: height 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);

    &.hover-effect {
      height: 150px;
      animation: rubberBand 0.6s;
    }
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
  }

  .social-icon {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &.hover-effect {
      animation: rubberBandIcon 0.6s;
    }
  }
}

@keyframes rubberBand {
  0% {
    transform: scaleY(1);
  }

  30% {
    transform: scaleY(1.25);
  }

  40% {
    transform: scaleY(0.75);
  }

  50% {
    transform: scaleY(1.15);
  }

  65% {
    transform: scaleY(0.95);
  }

  75% {
    transform: scaleY(1.05);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes rubberBandIcon {
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(1.25);
  }

  40% {
    transform: scale(0.85);
  }

  50% {
    transform: scale(1.15);
  }

  65% {
    transform: scale(0.95);
  }

  75% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>