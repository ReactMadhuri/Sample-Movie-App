import React from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { useNavigation } from '@react-navigation/native'; 
import { RootStackNavigationProp } from '../navigation/types';
import { BASE_IMAGE_URL } from '../services/urls';

const { width } = Dimensions.get('window');

interface BannerImageProps {
  item:any
}

const BannerImage: React.FC<BannerImageProps> = ({ item}) => {

const navigation = useNavigation<RootStackNavigationProp>();


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

if (item.loading) return renderShimmer();
  return (
    <TouchableOpacity style={styles.container} 
    onPress={() => navigation.navigate('Details',{item})} 
    >
      <Image
        source={{ uri: `${BASE_IMAGE_URL}${item.backdrop_path}` }} 
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width ,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    margin:10
  },

  shimmerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between', 
  },
  shimmerPlaceholder: {
    width: width * 0.85, 
    height: 300,
    borderRadius: 15,
    margin: 5, 
  },
});

export default BannerImage;
