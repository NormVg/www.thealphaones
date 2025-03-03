<script setup>
import Aura from '@/components/Aura.vue';
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';
import NavBar from '@/components/NavBar.vue';
import Projects from '@/components/Projects.vue';
import { useNavBarStore } from '@/stores/NavBarStore';


const NavBarStore = useNavBarStore()

</script>

<template>
  <NavBar v-if="NavBarStore.isNavBar" />
  <Header />
  <Hero />
  <Intro/>
  <Aura/>
  <Projects/>
</template>

<style scoped>

</style>
