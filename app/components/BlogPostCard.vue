<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="block group">
    <UCard
      v-if="post"
      class="-p-5 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      <!-- Image avec overlay -->
      <div class="relative group">
        <img
          :src="post.image"
          :alt="post.title"
          class="rounded-lg mb-3 h-40 w-full object-cover transition duration-300 group-hover:grayscale"
        />

        <!-- Overlay au centre -->
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        >
          <span
            class="px-4 py-2 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-200"
          >
            Lire plus
          </span>
        </div>
      </div>

      <!-- Infos sous l'image -->
      <div>
        <p class="text-xs text-gray-400 mt-2 text-right">
          {{ post.date }}
        </p>

        <div>
          <h3 class="font-bold text-2xl mb-2">
            {{ post.title }}
          </h3>

          <p class="text-sm text-gray-600 text-justify">
            {{ post.description }}
          </p>

          <p class="text-xs text-gray-400 mt-2 border-t pt-2 border-gray-300">
            {{ post.author }}
          </p>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: {
    title: string
    slug: string
    description: string
    image: string
    date: string
    author?: string
  }
}>()
</script>
