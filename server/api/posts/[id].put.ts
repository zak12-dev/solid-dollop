import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import { readPosts, writePosts, type Post } from '../../utils/db';

export default defineEventHandler(async (event) => {
  const postId = parseInt(event.context.params.id, 10);

  if (isNaN(postId)) {
    setResponseStatus(event, 400);
    return { error: 'L\'ID de l\'article est invalide.' };
  }

  try {
    const body = await readBody(event);
    const { title, content, slug, author, description, image } = body;

    // Liste des champs modifiables
    const updatableFields = ['title', 'content', 'slug', 'author', 'description', 'image'];
    const hasValidUpdate = updatableFields.some(field => 
      field in body && body[field] !== undefined
    );

    if (!hasValidUpdate) {
      setResponseStatus(event, 400);
      return { 
        error: `Au moins un champ (${updatableFields.join(', ')}) doit être fourni pour la mise à jour.`
      };
    }

    const posts = await readPosts();
    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
      setResponseStatus(event, 404);
      return { error: 'Article non trouvé.' };
    }

    // Maj des champs uniquement fournis
    const originalPost = posts[postIndex];
    const updatedPost: Post = {
      ...originalPost,
      // Permet de mettre à jour avec des chaînes vides
      title: title !== undefined ? title : originalPost.title,
      content: content !== undefined ? content : originalPost.content,
      slug: slug !== undefined ? slug : originalPost.slug,
      author: author !== undefined ? author : originalPost.author,
      description: description !== undefined ? description : originalPost.description,
      image: image !== undefined ? image : originalPost.image,
      updated_at: new Date().toISOString(),
    };

    // Validation optionnelle du slug (uniquement si modifié)
    if (slug !== undefined && slug !== originalPost.slug) {
      const slugExists = posts.some(p => p.id !== postId && p.slug === slug);
      if (slugExists) {
        setResponseStatus(event, 409);
        return { error: 'Ce slug est déjà utilisé par un autre article.' };
      }
    }

    posts[postIndex] = updatedPost;
    await writePosts(posts);

    return updatedPost;

  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'article ${postId}:`, error);
    setResponseStatus(event, 500);
    return {
      error: 'Une erreur est survenue lors de la mise à jour de l\'article.',
      details: error instanceof Error ? error.message : 'Erreur inconnue',
    };
  }
});