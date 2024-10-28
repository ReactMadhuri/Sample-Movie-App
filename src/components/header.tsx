import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
// import searchIcon from '../assets/search.png'
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


interface HeaderProps {
  title: string;
  rightItem?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, rightItem }) => {
 
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>{title}</Text>
      {rightItem && (
      
       <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.backButton}>
       <View>

       <Image source={require('../assets/search.png')} style={styles.icon} />

       </View>

     </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#007BFF',
  },
  rightButton: {
    padding: 8,
  },
  rightButtonText: {
    color: '#007BFF',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default Header;
