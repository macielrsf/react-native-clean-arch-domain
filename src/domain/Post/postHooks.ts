import { useQuery } from '@tanstack/react-query';
import { postService } from './postService';

// Query keys para cache
const postQueryKeys = {
  all: ['posts'] as const,
  lists: () => [...postQueryKeys.all, 'list'] as const,
  list: (filters?: string) => [...postQueryKeys.lists(), { filters }] as const,
  details: () => [...postQueryKeys.all, 'detail'] as const,
  detail: (id: string) => [...postQueryKeys.details(), id] as const,
};

/**
 * Hook para buscar todos os posts
 */
export const usePosts = () => {
  return useQuery({
    queryKey: postQueryKeys.lists(),
    queryFn: () => postService.getList(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  });
};

/**
 * Hook para buscar um post específico por ID
 */
export const usePost = (id: string) => {
  return useQuery({
    queryKey: postQueryKeys.detail(id),
    queryFn: () => postService.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

/**
 * Hook para buscar posts por usuário
 */
export const usePostsByUser = (userId: number) => {
  return useQuery({
    queryKey: postQueryKeys.list(`user-${userId}`),
    queryFn: () => postService.getByUserId(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}; 