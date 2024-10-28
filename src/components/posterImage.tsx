import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { RootStackNavigationProp } from '../navigation/types';
import { BASE_IMAGE_URL } from '../services/urls';

interface PosterImageProps {
  posterPath: string; 
  loading : boolean;
  item:any
}

const PosterImage: React.FC<PosterImageProps> = ({ posterPath,loading,item}) => {
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
    <TouchableOpacity style={styles.container}
    onPress={() => navigation.navigate('Details',{item})} 
    >
      <Image
        source={{ uri: `${BASE_IMAGE_URL}${posterPath}` }} 
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10, 

  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
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
});

export default PosterImage;
