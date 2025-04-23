<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <div class="wrapper">
    <Navigation/>

    <header id="home">
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
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>