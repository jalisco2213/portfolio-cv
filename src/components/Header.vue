<script setup>
import { computed } from 'vue'
import SelectLanguage from './SelectLanguage.vue'
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()

const navLinks = computed(() => [
  { href: '#home', text: languageStore.t('header.home') },
  { href: '#works', text: languageStore.t('header.works') },
  { href: '#about-me', text: languageStore.t('header.aboutMe') },
  { href: '#contacts', text: languageStore.t('header.contacts') }
])
</script>

<template>
  <div class="header-main">
    <div class="header-logo bold">
      <a href="#">
        <img src="/logo.png" alt="/">
        jalisco dev.
      </a>
    </div>

    <div class="header-navigation">
      <nav>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="nav-link">
              <span>#</span>{{ link.text }}
            </a>
          </li>
        </ul>
      </nav>

      <SelectLanguage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-navigation {
  display: flex;
  align-items: center;
  gap: 40px;
  color: var(--secondary-text-color);
}

.header-logo {
  user-select: none;

  a {
    user-select: none;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 35px;
    }
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 35px;

  span {
    color: var(--third-text-color);
  }
}
</style>