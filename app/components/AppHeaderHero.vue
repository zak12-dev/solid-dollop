<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'



const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/docs/getting-started',
    active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Posts',
    to: '/docs/components',
    active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Work',
    to: '/docs/getting-started',
    active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Features',
    to: '/docs/components',
    active: route.path.startsWith('/docs/components')
  }
])
</script>


<template>
  <section class="hero-wrapper relative">
    <!-- Image de background qui couvre tout, y compris le header -->
    <div class="hero-bg absolute inset-0 z-0">
      <img 
        src="/images/fond-hero.jpg" 
        alt="Hero background" 
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
    </div>

    <!-- Header au-dessus de l'image -->
  <AppHeader />

    <!-- Contenu -->
    <div class="hero-content relative z-10 container mx-auto px-4 pt-40 pb-20 min-h-screen flex flex-col justify-center items-center text-center text-white">
       <p class=" font-cookie text-xl md:text-2xl mb-3 max-w-3xl opacity-90">
        Votre message accrocheur qui explique ce que vous faites
      </p>
        <h1 class="font-nova-square text-4xl md:text-8xl font-bold mb-3 animate-fade-in">
        Titre Principal
      </h1>
      <p class="font-cookie text-xl md:text-2xl mb-12 max-w-3xl opacity-90">
        Votre message accrocheur qui explique ce que vous faites
      </p>
      <div class="mt-15 flex flex-col sm:flex-row gap-4">
        <UButton size="xl" color="primary" class="px-8 py-4">
          Démarrer maintenant
        </UButton>
        <UButton size="xl" variant="outline" color="neutral" class="px-8 py-4 bg-white text-black">
          En savoir plus
        </UButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

.hero-wrapper {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
