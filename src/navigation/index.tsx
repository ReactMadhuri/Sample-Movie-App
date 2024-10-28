import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import DetailsScreen from "../screens/DetailsScreen";
import SearchScreen from "../screens/SearchScreen";


const Stack = createStackNavigator();


const MainStack=()=>{

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailsScreen}  />
            <Stack.Screen name="Search" component={SearchScreen} />

        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack