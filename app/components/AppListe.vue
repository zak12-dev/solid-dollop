<script setup lang="ts">
type BlogPost = {
  title: string
  description: string
  slug: string
  image: string
  date: string
  author?: string
}

const posts = ref<BlogPost[]>([
  {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
   {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
  {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
   {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },{
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
   {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE', 
    slug: 'nuxt-icon-v1'
  },
  {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
   {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
  {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  },
  {
    title: 'Nuxt Icon v1',
    description: 'Google Traduction vous permet de traduire des mots, des expressions et des pages Web entre le français et plus de 100 autres langues. Vous pouvez aussi traduire des textes, des images, des documents et des sites Web en détectant la langue source.',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'JOHN DOE',
    slug: 'nuxt-icon-v1'
  }
])
</script>

<template>
    
  <div class="p-15 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <BlogPostCard
      v-for="post in posts"
      :key="post.title"
      :post="post"
    />
  </div>
</template>
