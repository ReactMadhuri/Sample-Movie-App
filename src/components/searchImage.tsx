import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { RootStackNavigationProp } from '../navigation/types';
import { BASE_IMAGE_URL } from '../services/urls';

interface SearchImageProps {
  posterPath: string; 
  loading : boolean;
  item:any
}

const SearchImage: React.FC<SearchImageProps> = ({ posterPath,loading,item}) => {
  const navigation = useNavigation<RootStackNavigationProp>();

  // Shimmer Placeholder Configuration
const renderShimmer = () => (
  <View style={styles.shimmerContainer}>
    {Array.from({ length: 5 }).map((_, index) => (
      <ShimmerPlaceholder
        key={index}
        style={styles.shimmerPlaceholder}
      />
    ))}
  </View>
);

if (loading) return renderShimmer();


  return (

    <TouchableOpacity style={styles.movieCard} 
    onPress={() => navigation.navigate('Details',{item})} 
    >
      <View style={styles.horizontal}>
      <Image
        source={{ uri: `${BASE_IMAGE_URL}${posterPath}` }} 
         style={styles.movieImage} 
      resizeMode="cover"
      />
      <Text 
      numberOfLines={4}
      style={styles.movieTitle }>{item.title}</Text>
      
      </View>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 container:{
  width:50,
  height:300,
  flexDirection: 'row',
  paddingVertical: 10,
  justifyContent: 'space-between',
  marginRight:30,
  marginBottom:10 
 },
  
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
    marginRight:10
  },
  shimmerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between', 
  },
  shimmerPlaceholder: {
    width: 200,
    height: 300,
    borderRadius: 15,
    margin: 5, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },


  movieCard: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,  // Makes the text container take up remaining space
    flexShrink: 1,  // Allows the text container to shrink if necessary
    paddingRight: 10, // Adds padding to avoid text clipping
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    flexWrap: 'wrap', 
    marginRight:130
  },
  
});

export default SearchImage;
