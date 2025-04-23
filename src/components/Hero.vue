<script setup>
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()
</script>

<template>
  <div class="hero-main">
    <div class="hero-info">
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

    <div class="hero-quote">
      <div class="hero-quote_top">
        <img src="/background/quote.svg" alt="">
        <img src="/background/quote.svg" alt="">
        {{ languageStore.t("hero.quote") }}
      </div>

      <div class="hero-quote_bottom">
        - Dr. Who
      </div>
    </div>

    <div class="block1"></div>
  </div>
</template>

<style lang="scss" scoped>
.hero-main {
  user-select: none;
}

.hero-info {
  display: flex;
  margin-bottom: 100px;
  align-items: center;
  justify-content: space-between;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 50%;

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  p {
    font-weight: 300;
  }
}

.block1 {
  background: none !important;
  position: absolute;
  right: 0;
  bottom: 100px;
  width: 100px;
  height: 100px;
  border: 1px solid var(--primary-text-color);
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

.hero-quote {
  position: relative;
  width: 650px;
  text-align: center;
  margin: 0 auto;

  &_top {
    padding: 20px;
    border: 1px solid var(--line-color);
  }

  &_bottom {
    display: flex;
    float: right;
    padding: 15px;
    border: 1px solid var(--line-color);
  }

  img:first-child {
    position: absolute;
    top: -15px;
    left: 15px;
  }

  img:last-child {
    position: absolute;
    bottom: -12px;
    right: 15px;
  }
}
</style>