import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, ViewStyle } from 'react-native';
import { Post } from '../../../types';
import { usePosts } from '../../../domain/Post/postHooks';
import { PostItem } from '../../../components';
import { Screen } from '../../../components/layout/Screen';
import { ErrorMessage } from '../../../components/ui/ErrorMessage';
import { HomeHeader } from './components/HomeHeader';

export const HomeScreen: React.FC = () => {
  const { 
    data: posts, 
    isLoading, 
    error, 
    refetch 
  } = usePosts();

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Post>) => (
    <PostItem 
      post={item} 
      onPress={(post) => {
        console.log('Post selecionado:', post.id);
      }}
    />
  ), []);

  const renderHeader = useCallback(() => (
    <HomeHeader />
  ), []);

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
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        contentContainerStyle={$listContent}
      />
    </Screen>
  );
};

const $listContent: ViewStyle = {
  paddingBottom: 20,
}; 