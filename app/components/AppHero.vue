<!-- components/Hero.vue -->
<template>
  <section class="hero-wrapper relative">
    <!-- Image de background -->
    <div class="hero-bg absolute inset-0 z-0">
      <img 
        src="/images/fond-hero.jpg" 
        alt="Hero background" 
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
    </div>

    <!-- Contenu -->
    <div class="hero-content relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 class="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
        Titre Principal
      </h1>
      <p class="text-xl md:text-3xl mb-12 max-w-3xl opacity-90">
        Votre message accrocheur qui explique ce que vous faites
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
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

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>