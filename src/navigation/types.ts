// src/navigation/types.ts

import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the parameters for your screens
export type RootStackParamList = {
  Home: undefined; 
  Search: undefined;
  Details: { item: any }; 
  
};

// Create a type for the navigation prop
export type RootStackNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  StackNavigationProp<RootStackParamList>
>;
