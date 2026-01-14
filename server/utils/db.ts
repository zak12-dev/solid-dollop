import { writeFile, readFile } from 'fs/promises';
import { resolve } from 'path';

// Définir le chemin vers notre fichier JSON
const dataPath = resolve('data', 'post.json');

// Définir le type pour un article
export interface Post {
  id: number;
  title: string;
  content: string;
  image: string; // chemin relatif vers l'image, ex: '/images/mon-image.jpg'
  created_at: string;
  updated_at: string;
}

// Fonction pour lire les articles depuis le fichier JSON
export async function readPosts(): Promise<Post[]> {
  try {
    const fileContent = await readFile(dataPath, 'utf-8');
    return JSON.parse(fileContent) as Post[];
  } catch (error) {
    // Si le fichier n'existe pas ou est vide, on retourne un tableau vide
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

// Fonction pour écrire les articles dans le fichier JSON
export async function writePosts(posts: Post[]): Promise<void> {
  await writeFile(dataPath, JSON.stringify(posts, null, 2), 'utf-8');
}
