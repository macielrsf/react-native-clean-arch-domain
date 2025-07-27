import React, { useCallback, memo, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

interface HomeHeaderProps {
  onSearchChange: (query: string) => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = memo(({ 
  onSearchChange 
}) => {
  const inputRef = useRef<TextInput>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
    onSearchChange(text);
  }, [onSearchChange]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Posts</Text>
        <Text style={styles.subtitle}>Explore os posts mais recentes</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          ref={inputRef}
          style={styles.searchInput}
          placeholder="Buscar posts..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearchChange}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          clearButtonMode="while-editing"
          blurOnSubmit={false}
          keyboardType="default"
          textContentType="none"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 16,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
}); 