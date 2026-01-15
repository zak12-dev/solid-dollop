import { defineEventHandler, setResponseStatus } from 'h3';
import { unlink } from 'fs/promises';
import { resolve } from 'path';
import { readPosts, writePosts } from '../../utils/db';

export default defineEventHandler(async (event) => {
  // Récupérer l'ID depuis les paramètres de la route
  const postId = parseInt(event.context.params.id, 10);

  if (isNaN(postId)) {
    setResponseStatus(event, 400); // Bad Request
    return { error: 'L\'ID de l\'article est invalide.' };
  }

  try {
    const posts = await readPosts();
    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
      setResponseStatus(event, 404); // Not Found
      return { error: 'Article non trouvé.' };
    }

    const postToDelete = posts[postIndex];

    // === Suppression de l'image associée ===
    if (postToDelete.image) {
      // Le chemin dans le JSON est /images/nom-fichier.jpg
      // On le transforme en chemin système : public/images/nom-fichier.jpg
      const imageName = postToDelete.image.split('/').pop();
      if (imageName) {
        const imagePath = resolve('public', 'images', imageName);
        try {
          await unlink(imagePath);
        } catch (unlinkError) {
          // Si le fichier image n'existe pas, on peut ignorer l'erreur
          // et continuer la suppression des données.
          if (unlinkError.code !== 'ENOENT') {
            console.error(`Impossible de supprimer le fichier image ${imagePath}:`, unlinkError);
            // On peut choisir de bloquer la suppression ici ou juste de logger l'erreur.
            // Pour ce cas, nous allons continuer.
          }
        }
      }
    }

    // === Suppression de l'article du JSON ===
    posts.splice(postIndex, 1);
    await writePosts(posts);

    // Renvoyer une réponse 204 No Content, qui signifie succès sans corps de réponse
    setResponseStatus(event, 204);
    return null;

  } catch (error) {
    console.error(`Erreur lors de la suppression de l'article ${postId}:`, error);
    setResponseStatus(event, 500); // Internal Server Error
    return {
      error: 'Une erreur est survenue lors de la suppression de l\'article.',
      details: error.message,
    };
  }
});
