// src/screens/SearchScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchMoviesRequest } from '../redux/actions';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { RootState } from '../redux/reducer/reducers';
import { BASE_IMAGE_URL } from '../services/urls';
import SearchImage from '../components/searchImage';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const {movies, loading } = useSelector(
    (state: RootState) => state.search,
  );

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 2) dispatch(searchMoviesRequest(text));
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies"
        value={query}
        onChangeText={handleSearch}
      />
      {loading ? (
        <ShimmerPlaceholder
          style={styles.shimmer}
          visible={!loading}
        />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
          <SearchImage  posterPath={item.poster_path} loading={loading}  item={item}/>
        )}
          ListEmptyComponent={<Text>No movies found.</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  movieText: {
    fontSize: 16,
    marginVertical: 8,
  },
  shimmer: {
    height: 200,
    width: '100%',
    marginVertical: 8,
    borderRadius: 8,
  },
  movieCard: {
    marginVertical: 8,
    alignItems: 'center',
  },
  movieImage: {
    width: 150,
    height: 225,
    borderRadius: 8,
    marginBottom: 8,
  },
  movieTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SearchScreen;
