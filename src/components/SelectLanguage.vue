<script setup>
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore'

const languageStore = useLanguageStore()
const isOpen = ref(false);

const changeLanguage = async (langCode) => {
  await languageStore.setLanguage(langCode);
  isOpen.value = false;
}

const selectedLabel = computed(() => {
  const lang = languageStore.languages.find(l => l.code === languageStore.currentLanguage);
  return lang ? lang.label : '';
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="custom-select" @click.stop="toggleDropdown">
    <div class="selected-option">
      {{ selectedLabel }}
      <span class="arrow">▼</span>
    </div>
    <transition name="slide-down">
      <div class="options-container" v-show="isOpen">
        <div class="option" v-for="lang in languageStore.languages" :key="lang.code"
          @click.stop="changeLanguage(lang.code)">
          {{ lang.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.selected-option {
  padding: 8px 16px;
  background: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;

  .arrow {
    margin-left: 8px;
    transition: transform 0.2s;
  }
}

.options-container {
  position: absolute;
  left: 0;
  width: 100%;
  border: 1px solid var(--line-color);
  border-radius: 4px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.option {
  padding: 8px 16px;
  transition: background 0.2s;

  &:hover {
    background: #32373f;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  transform-origin: top;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: scaleY(1);
  opacity: 1;
}
</style>