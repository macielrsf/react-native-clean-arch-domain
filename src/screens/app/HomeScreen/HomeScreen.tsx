import React, { useCallback, useState, useMemo } from 'react';
import { FlatList, ListRenderItemInfo, ViewStyle } from 'react-native';

import { Post } from '../../../types';
import { usePosts } from '@domain/Post/postHooks';
import { PostItem } from '@components/index';
import { Screen } from '@components/layout/Screen';
import { ErrorMessage } from '@components/ui/ErrorMessage';

import { LoadingSpinner } from '@components/ui/LoadingSpinner';
import { HomeHeader } from './components/HomeHeader';

export const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { 
    data: posts, 
    isLoading, 
    error, 
    refetch 
  } = usePosts();

  // Filtra os posts baseado na busca em tempo real
  const filteredPosts = useMemo(() => {
    if (!posts || !searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase().trim();
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handlePostPress = useCallback((post: Post) => {
    console.log('Post selecionado:', post.id);
  }, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Post>) => (
    <PostItem 
      post={item} 
      onPress={handlePostPress}
    />
  ), [handlePostPress]);

  const renderHeader = useCallback(() => (
    <HomeHeader onSearchChange={handleSearchChange} />
  ), [handleSearchChange]);

  if (isLoading) {
    return (
      <Screen>
        <LoadingSpinner />
      </Screen>
    );
  }

  if (error && !posts) {
    return (
      <Screen>
        <ErrorMessage 
          message="Erro ao carregar os posts"
          onRetry={() => refetch()}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        contentContainerStyle={$listContent}
        removeClippedSubviews={false}
      />
    </Screen>
  );
};

const $listContent: ViewStyle = {
  paddingBottom: 20,
}; 