import { defineEventHandler, readMultipartFormData, setResponseStatus } from 'h3';
import { writeFile } from 'fs/promises';
import { resolve, extname } from 'path';
import { readPosts, writePosts, type Post } from '../../utils/db';

export default defineEventHandler(async (event) => {
  try {
    const formData = await readMultipartFormData(event);

    if (!formData) {
      setResponseStatus(event, 400); // Bad Request
      return { error: 'Requête invalide, formulaire manquant.' };
    }

    // Extraire les champs texte et le fichier image
    const titleEntry = formData.find((p) => p.name === 'title');
    const contentEntry = formData.find((p) => p.name === 'content');
    const imageFile = formData.find((p) => p.name === 'image');

    // Valider que tous les champs sont présents
    if (!titleEntry || !contentEntry || !imageFile || !imageFile.filename) {
      setResponseStatus(event, 400);
      return { error: 'Champs manquants. "title", "content" et "image" sont requis.' };
    }

    const title = titleEntry.data.toString('utf-8');
    const content = contentEntry.data.toString('utf-8');

    // === Gestion de l'upload de l'image ===
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = extname(imageFile.filename);
    const newFilename = `post-${uniqueSuffix}${extension}`;
    const imagePath = resolve('public', 'images', newFilename);

    // Écrire le fichier image sur le disque
    await writeFile(imagePath, imageFile.data);
    const imageUrl = `/images/${newFilename}`; // URL publique de l'image

    // === Création du nouvel article ===
    const posts = await readPosts();
    const newPost: Post = {
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      title,
      content,
      image: imageUrl,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Ajouter le nouvel article à la liste et sauvegarder le fichier JSON
    posts.push(newPost);
    await writePosts(posts);

    // Renvoyer l'article créé avec un statut 201
    setResponseStatus(event, 201); // Created
    return newPost;

  } catch (error) {
    console.error('Erreur lors de la création de l\'article :', error);
    setResponseStatus(event, 500); // Internal Server Error
    return {
      error: 'Une erreur est survenue lors de la création de l\'article.',
      details: error.message,
    };
  }
});
