<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppHeader from '~/components/AppHeader.vue'

// Liste des posts
const posts = [
  {
    slug: 'nuxt-icon-v1',
    title: 'Nuxt Icon v1',
    description: 'Discover Nuxt Icon v1!',
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    date: '2024-11-25',
    author: 'Zaki AGOKOLI',
    content: `Quest-ce que le Lorem Ipsum ? Lorem Ipsum est simplement un texte factice de l'industrie de limpression et de la composition typographique. 
	Le Lorem Ipsum est le texte factice standard de lindustrie depuis les années 1500, lorsquun imprimeur inconnu a pris une série de caractères et la brouillée pour fabriquer un livre de spécimens de caractères. 
    Elle a survécu non seulement à cinq siècles, mais aussi au passage à la composition électronique, restant essentiellement inchangée. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker, incluant des versions de Lorem Ipsum. Pourquoi lutilisons-nous ?
    Il est bien établi qun lecteur sera distrait par le contenu lisible dune page lorsquil regarde sa mise en page. L’intérêt d’utiliser Lorem Ipsum est quil a une distribution plus ou moins normale des lettres, contrairement à « Content ici, Content here », ce qui donne un aspect danglais lisible. De nombreux logiciels de publication assistée par ordinateur et éditeurs de pages web utilisent désormais Lorem Ipsum comme texte modèle par défaut, et une recherche de « lorem ipsum » permettra de découvrir de nombreux sites encore à leurs débuts. 
    Diverses versions ont évolué au fil des ans, parfois par accident, parfois volontairement (humour injecté et autres).`
  },
  {	
    slug: 'nuxt-3-14',
    title: 'Nuxt 3.14',
    description: 'Nuxt 3.14 is out!',
    image: 'https://nuxt.com/assets/blog/v3.14.png',
    date: '2024-11-04',
    author: 'Zaki AGOKOLI',
    content: `Contenu complet de l'article Nuxt 3.14.`
  }
]


const route = useRoute()
const slug = route.params.slug

// Filtrer uniquement l'article cliqué
const post = posts.find(p => p.slug === slug)
</script>
<template>
  <div class="relative">
    <!-- Background image et overlay comme dans AppHeaderHero -->
    <div class="hero-bg absolute inset-0 z-0">
      <img 
        src="/images/fond-hero.jpg" 
        alt="Hero background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
    </div>

    <!-- Header au-dessus de l'image -->
  <AppHeader />

    <!-- Contenu de l'article sous le header -->
    <div class="relative z-10 max-w-4xl mx-auto p-6 pt-32">
      <div v-if="post">
        <img :src="post.image" :alt="post.title" class="rounded-lg w-full mb-4 h-64 object-cover" />
        <p class="text-xs text-gray-400 mb-4 text-right">{{ post.date }} - {{ post.author }}</p>
		<h1 class="text-3xl font-bold mb-2">{{ post.title }}</h1>
        <div class="prose max-w-full text-justify">
          {{ post.content }}
        </div>
      </div>
      <div v-else class="text-center text-gray-500 p-10">
        Article introuvable.
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-bg {
  min-height: 300px;
  position: absolute;
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>

