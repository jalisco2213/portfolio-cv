<script setup>
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()
</script>

<template>
  <div class="hero-main">
    <div class="hero-left">
      <h1 v-html="languageStore.t('hero.title')"></h1>
      <p style="color: var(--secondary-text-color)">{{ languageStore.t('hero.subtitle') }}</p>

      <button>{{ languageStore.t('hero.button') }}</button>
    </div>

    <div class="hero-right">
      <div class="hero-img">
        <img class="line" src="/background/line.svg" alt="">
        <img class="avatar" src="/avatar.png" alt="">
        <img class="dots" src="/background/dots.svg" alt="">
      </div>

      <div class="hero-subtitle">
        <div class="block"></div>

        <p style="font-size: 11px;" v-html="languageStore.t('hero.text')"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-main {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 50%;
}

.hero-right {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;

  .hero-img {
    position: relative;

    .line {
      position: absolute;
      top: 20px;
      left: 0;
      z-index: 0;
    }

    .avatar {
      position: relative;
      z-index: 1;
      width: 430px;
    }

    .dots {
      z-index: 2;
      position: absolute;
      bottom: 20px;
      right: 75px
    }
  }

  .hero-subtitle {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 6;
    margin-top: -6px;
    margin-right: 21px;
    width: 290px;
    border: 1px solid var(--third-text-color);

    .block {
      width: 10px;
      height: 10px;
      background: var(--third-text-color);
    }
  }
}
</style>