import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Post } from '../../types';

interface PostItemProps {
  post: Post;
  onPress?: (post: Post) => void;
  style?: any;
}

export const PostItem: React.FC<PostItemProps> = ({ post, onPress, style }) => {
  const handlePress = () => {
    if (onPress) {
      onPress(post);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {post.title}
        </Text>
        <Text style={styles.body} numberOfLines={3}>
          {post.body}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.userId}>Usuário {post.userId}</Text>
          <Text style={styles.date}>{formatDate(post.createdAt)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
    lineHeight: 24,
  },
  body: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
}); 