import { defineEventHandler } from 'h3';
import { readPosts } from '../../utils/db';

export default defineEventHandler(async (event) => {
  try {
    const posts = await readPosts();
    
    // retourner tous les champs sauf le champ content
    const postsWithoutContent = posts.map(post =>{
      const { content, ...postsWithoutContent } = post;
      return postsWithoutContent;
    })
    return postsWithoutContent;
  } catch (error) {
    // En cas d'erreur (ex: fichier JSON malformé), on renvoie une erreur 500
    setResponseStatus(event, 500);
    return {
      error: 'Impossible de lire les données des articles.',
      details: error.message,
    };
  }
});
