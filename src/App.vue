<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
</script>

<template>
  <div class="wrapper">
    <header>
      <Header />
    </header>

    <main>
      <section>
        <Hero />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 150px;
}
</style>