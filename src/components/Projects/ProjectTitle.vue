<script setup>
import {useLanguageStore} from '@/stores/languageStore.js'
import ProjectCard from "@/components/Projects/ProjectCard.vue";

const languageStore = useLanguageStore()
</script>

<template>
  <div class="project-container">

    <div class="project-title">
      <h2>
        <span style="color: var(--third-text-color)">#</span>{{ languageStore.t('header.works') }}
        <div class="line"></div>
      </h2>

<!--      <span>-->
<!--        {{ languageStore.t('projects.button') }} ~~>-->
<!--      </span>-->
    </div>

    <ProjectCard/>

    <img class="dots" src="/background/dots.svg" alt="">
  </div>
</template>

<style lang="scss" scoped>
.project-title {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    display: flex;
    align-items: center;

    .line {
      margin-left: 30px;
      background: var(--third-text-color);
      height: 1px;
      max-width: 100%;
      width: 500px;
    }
  }

  span:last-child {
    cursor: pointer;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      right: 50%;
      height: 1px;
      background-color: var(--third-text-color);
      transition: all 0.3s ease;
    }

    &:hover::after {
      left: 0;
      right: 0;
    }
  }
}

.dots {
  position: absolute;
  left: 0;
  top: 100%;
}

</style>