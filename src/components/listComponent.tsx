

import React, { useRef, useState,useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet,Dimensions, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import PosterImage from './posterImage';
import BannerImage from './bannerImage';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const { width } = Dimensions.get('window');

interface ListComponentProps {
  data: { id: number; poster_path: string }[]; 
  title: string;
  type :string;
  loading: boolean;
}

const ListComponent: React.FC<ListComponentProps> = ({ data, title,type,loading}) => {

  const [currentIndex,setCurrentIndex]=useState(0)
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / width)); 
  };


  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (type === 'banner' && data.length > 0) {
      let currentIndex = 0;

      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % data.length; 
        flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });

        
      }, 3000); 
    }

    return () => {
      if (interval) {
        clearInterval(interval); 
      }
    };
  }, [type, data]);

  return (
    <View >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        ref={flatListRef} // Set ref here
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={type==='banner'?true:false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
            type==='banner'?
        <BannerImage  item={item}/>:
        <PosterImage  posterPath={item.poster_path} loading={loading}  item={item}/>
        )}
        ListEmptyComponent={<Text>No movies found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  itemContainer: {
    marginRight: 0, 
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
  },
});

export default ListComponent;
