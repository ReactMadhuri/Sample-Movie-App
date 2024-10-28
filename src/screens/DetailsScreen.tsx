import React from 'react';
import { View, Text,  Modal, StyleSheet,Image, Dimensions,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

import { RouteProp } from '@react-navigation/native';
import { BASE_IMAGE_URL, MOVIE_VIDEO_URL } from '../services/urls';
const { width } = Dimensions.get('window');

interface DetailsProps {
  route: RouteProp<{ params: {item: any} }, 'params'>; // Adjust the type as necessary
}

const DetailsScreen : React.FC<DetailsProps> = ({ route }) => {
  const { item } = route.params; // Access the movieId here

  const [isVisible, setIsVisible] = React.useState(false);

  const handleWatchMovie = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
      <Text style={styles.title}>{item.title}</Text>
      
      <Image
        source={{ uri: `${BASE_IMAGE_URL}${item.poster_path}` }} 
        style={styles.image}
      />
      <Text 
      numberOfLines={3}
      style={styles.text}>
        {item.overview}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleWatchMovie}>
        <Text style={styles.buttonText}>Watch Movie</Text>
      </TouchableOpacity>
      
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: MOVIE_VIDEO_URL }}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            onEnd={handleClose} 
            onError={() => console.log('Video Error')} 
          />
        </View>

        <TouchableOpacity style={[styles.button,{margin:10}]} onPress={handleClose}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      </Modal>
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1, 
    padding: 20,
    justifyContent: 'center', 
  },
  content: {
    flex: 1, 
    justifyContent: 'flex-start', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: width,
    height: '70%',
    resizeMode:'contain',
    margin:10,
    alignSelf:'center'
  },
  text:{
    margin:10
  },
  button: {
    backgroundColor: '#6200EE', // Purple color
    paddingVertical: 12,        // Vertical padding
    paddingHorizontal: 24,      // Horizontal padding
    borderRadius: 8,            // Rounded corners
    alignItems: 'center',       // Center text horizontally
    justifyContent: 'center',    // Center text vertically
    elevation: 2,               // Shadow effect for Android
    shadowColor: '#000',        // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2,         // Shadow opacity
    shadowRadius: 2,            // Shadow radius
  },
  buttonText: {
    color: '#FFFFFF',           // Text color
    fontSize: 16,               // Font size
    fontWeight: 'bold',         // Bold text
  },
});

export default DetailsScreen;
