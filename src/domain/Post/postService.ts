import { Post } from '../../types';
import { postApi } from './postApi';

/**
 * Serviço de domínio para posts
 * Contém a lógica de negócio relacionada aos posts
 */
export const postService = {
  /**
   * Busca todos os posts
   */
  async getList(): Promise<Post[]> {
    return postApi.getList();
  },

  /**
   * Busca um post específico por ID
   */
  async getById(id: string): Promise<Post | null> {
    return postApi.getById(id);
  },

  /**
   * Busca posts por usuário
   */
  async getByUserId(userId: number): Promise<Post[]> {
    const allPosts = await postApi.getList();
    return allPosts.filter(post => post.userId === userId);
  },
}; 