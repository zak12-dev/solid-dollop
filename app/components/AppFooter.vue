<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// Liens rapides
const items: NavigationMenuItem[] = [
  { label: 'Accueil', to: '/', target: '_self' },
  { label: 'Blog', to: '/blog', target: '_self' },
  { label: 'À propos', to: '/about', target: '_self' },
  { label: 'Contact', to: '/contact', target: '_self' }
]

// Réseaux sociaux
const socialLinks = [
  { icon: 'i-simple-icons-discord', label: 'Discord', to: 'https://go.nuxt.com/discord' },
  { icon: 'i-simple-icons-x', label: 'X', to: 'https://go.nuxt.com/x' },
  { icon: 'i-simple-icons-github', label: 'GitHub', to: 'https://github.com/nuxt/nuxt' },
  { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', to: '#' }
]
</script>

<template>
  <UApp class="mt-12">
    <USeparator type="dashed" class="h-px" />

    <UFooter class="bg-gray-50 dark:bg-gray-900 px- py-8">
      <div class="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6">

        <!-- Left: copyright + description -->
        <div class="flex-1 text-left">
          <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">
            © {{ new Date().getFullYear() }} Blog Nuxt. Tous droits réservés.
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-xs max-w-xs mt-1">
            Découvrez nos articles, tutoriels et guides Nuxt pour améliorer vos projets web.
          </p>
        </div>

        <!-- Center: navigation rapide -->
        <div class="flex-1 flex justify-center">
          <UNavigationMenu :items="items" variant="link" />
        </div>

        <!-- Right: newsletter + social -->
        <div class="flex-1 flex flex-col items-end gap-2">
          <!-- Newsletter -->
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              class="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
            <UButton color="primary" variant="solid">
              S’inscrire
            </UButton>
          </div>

          <!-- Réseaux sociaux -->
          <div class="flex gap-2 mt-2">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :icon="social.icon"
              variant="ghost"
              color="neutral"
              :to="social.to"
              target="_blank"
              :aria-label="social.label"
              class="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

      </div>
    </UFooter>
  </UApp>
</template>
