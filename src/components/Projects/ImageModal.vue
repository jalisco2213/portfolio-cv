<!-- src/components/ImageModal.vue -->
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const currentImageIndex = ref(0);

const currentImage = computed(() => {
  if (currentImageIndex.value === 0) {
    return props.project.imageUrl;
  } else {
    return props.project.additionalImages[currentImageIndex.value - 1];
  }
});

const totalImages = computed(() => {
  return 1 + (props.project.additionalImages?.length || 0);
});

const showNextImage = () => {
  if (currentImageIndex.value < totalImages.value - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
};

const showPrevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = totalImages.value - 1;
  }
};

const handleKeyDown = (e) => {
  if (!props.isOpen) return;

  if (e.key === 'ArrowRight') {
    showNextImage();
  } else if (e.key === 'ArrowLeft') {
    showPrevImage();
  } else if (e.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal" @click.self="$emit('close')">
      <Transition name="modal-content">
        <div class="modal-content" v-if="isOpen">
          <span class="close" @click="$emit('close')">&times;</span>

          <div class="navigation-arrow left" @click.stop="showPrevImage">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="white"/>
            </svg>
          </div>

          <div class="image-container">
            <img :src="currentImage" :alt="project.title" class="modal-image">
            <div class="image-counter" v-if="totalImages > 1">
              {{ currentImageIndex + 1 }} / {{ totalImages }}
            </div>
          </div>

          <div class="navigation-arrow right" @click.stop="showNextImage">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white"/>
            </svg>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/* Модальное окно */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.modal-content-enter-active {
  transition: all 0.3s ease 0.1s;
}

.modal-content-leave-active {
  transition: all 0.2s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: rgba(30, 30, 30, 0.9);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
  max-width: 100%;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  object-fit: contain;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &:hover {
    color: #ff6b6b;
    transform: rotate(90deg) scale(1.1);
    background: rgba(0, 0, 0, 0.7);
  }
}

.navigation-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  &:hover svg {
    opacity: 1;
  }
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}

.image-counter {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>