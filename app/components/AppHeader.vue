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
 
    <!-- Header au-dessus de l'image -->
    <UHeader class="absolute top-0 left-0 right-0 z-20">
      <template #title>
        <span class="font-gravitas text-2xl text-white">Mon Logo</span>
      </template>
      <UNavigationMenu :items="items" />
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
</template>