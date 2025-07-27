import { Post } from '../../types';
import { postListMock } from './postListMock';

// API base URL - você pode alterar para uma API real
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const postApi = {
  /**
   * Busca lista de posts da API ou retorna dados mockados
   * Você pode alternar entre API real e mock alterando o USE_MOCK_DATA
   */
  getList: async (): Promise<Post[]> => {
    const USE_MOCK_DATA = true; // Altere para false para usar API real
    
    if (USE_MOCK_DATA) {
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      return postListMock;
    }

    try {
      // Exemplo de chamada para API real
      const response = await fetch(`${API_BASE_URL}/posts`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transforma os dados da API para o formato esperado
      return data.map((post: any) => ({
        id: post.id.toString(),
        title: post.title,
        body: post.body,
        userId: post.userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      // Fallback para dados mockados em caso de erro
      return postListMock;
    }
  },

  /**
   * Busca um post específico por ID
   */
  getById: async (id: string): Promise<Post | null> => {
    const USE_MOCK_DATA = true;
    
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 500));
      return postListMock.find(post => post.id === id) || null;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      return {
        id: data.id.toString(),
        title: data.title,
        body: data.body,
        userId: data.userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Erro ao buscar post:', error);
      return null;
    }
  },
}; 