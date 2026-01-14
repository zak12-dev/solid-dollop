import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import { readPosts, writePosts, type Post } from '../../utils/db';

export default defineEventHandler(async (event) => {
  // Récupérer l'ID depuis les paramètres de la route
  const postId = parseInt(event.context.params.id, 10);

  if (isNaN(postId)) {
    setResponseStatus(event, 400); // Bad Request
    return { error: 'L\'ID de l\'article est invalide.' };
  }

  try {
    const body = await readBody(event);
    const { title, content } = body;

    // Validation simple du corps de la requête
    if (!title && !content) {
      setResponseStatus(event, 400);
      return { error: 'Au moins un champ ("title" ou "content") doit être fourni pour la mise à jour.' };
    }

    const posts = await readPosts();
    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
      setResponseStatus(event, 404); // Not Found
      return { error: 'Article non trouvé.' };
    }

    // Mettre à jour l'article
    const originalPost = posts[postIndex];
    const updatedPost: Post = {
      ...originalPost,
      title: title || originalPost.title,
      content: content || originalPost.content,
      updated_at: new Date().toISOString(),
    };

    posts[postIndex] = updatedPost;
    await writePosts(posts);

    return updatedPost;

  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'article ${postId}:`, error);
    setResponseStatus(event, 500); // Internal Server Error
    return {
      error: 'Une erreur est survenue lors de la mise à jour de l\'article.',
      details: error.message,
    };
  }
});
