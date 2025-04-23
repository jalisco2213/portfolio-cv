<script setup>
import {ref, computed} from 'vue'; // Не забудьте импортировать computed
import projectsData from '@/data/projects.json';
import {useLanguageStore} from '@/stores/languageStore';
import ImageModal from './ImageModal.vue';

const projects = ref(projectsData);
const isModalOpen = ref(false);
const currentProject = ref(null);
const languageStore = useLanguageStore();

const localizedProjects = computed(() => {
  return projects.value.map(project => ({
    ...project,
    title: project.title[languageStore.currentLanguage] || project.title.en,
    subtitle: project.subtitle[languageStore.currentLanguage] || project.subtitle.en
  }));
});

const openModal = (project) => {
  currentProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<template>
  <div class="projects-container">
    <div
        class="project-card"
        v-for="project in localizedProjects"
        :key="project.id"
    >
      <div class="project-image-container" @click="openModal(project)">
        <div class="image-wrapper">
          <img :src="project.imageUrl" :alt="project.title" class="project-image">
        </div>
      </div>

      <div class="project-language">
        {{ project.languages }}
      </div>

      <div class="project-info">
        <p class="project-info_title">{{ project.title }}</p>
        <div class="project-info_subtitle">{{ project.subtitle }}</div>
      </div>
    </div>
  </div>

  <ImageModal
      :project="currentProject"
      :is-open="isModalOpen"
      @close="closeModal"
  />
</template>

<style lang="scss" scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.project-card {
  width: 300px;
  max-width: 300px;
  perspective: 1500px;
  border: 1px solid var(--secondary-text-color);
  position: relative;
  background: transparent;
  overflow: hidden;
}

.project-image-container {
  width: 300px;
  height: 200px;
  border-bottom: 1px solid var(--secondary-text-color);
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  transform: rotateY(-5deg) rotateX(13deg) scale(1.1);
}

.project-image-container:hover .project-image {
  transform: rotateY(0) rotateX(0) scale(1.03);
}

.project-language {
  padding: 10px;
  font-size: 14px;
  color: var(--secondary-text-color);
  border-bottom: 1px solid var(--secondary-text-color);
}

.project-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &_title {
    font-weight: bold;
  }

  &_subtitle {
    color: var(--secondary-text-color);
    font-weight: 300;
    font-size: 13px;
  }
}
</style>