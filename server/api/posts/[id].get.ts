import { defineEventHandler } from 'h3';
import { readPosts } from '../../utils/db';

export default defineEventHandler(async (event) => {
  // Récupérer l'ID depuis les paramètres de la route
  const postId = parseInt(event.context.params.id, 10);

  // Vérifier si l'ID est un nombre valide
  if (isNaN(postId)) {
    setResponseStatus(event, 400); // Bad Request
    return { error: 'L\'ID de l\'article est invalide.' };
  }

  try {
    const posts = await readPosts();
    const post = posts.find((p) => p.id === postId);

    if (!post) {
      // Si aucun article ne correspond, renvoyer une erreur 404
      setResponseStatus(event, 404); // Not Found
      return { error: 'Article non trouvé.' };
    }

    return post;
  } catch (error) {
    setResponseStatus(event, 500);
    return {
      error: 'Impossible de lire les données des articles.',
      details: error.message,
    };
  }
});
