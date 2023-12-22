
import { Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator()

const deviseWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <>
       <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
             name="HomeScreen" 
             component={HomeScreen}
             options={{
              title: 'IM Roberto Carlos Gomez Ledo',
              headerTitleStyle: {
                fontSize: deviseWidth < 380 ? 14.5 : 18
              }
             }}
            />
         </Stack.Navigator>
       </NavigationContainer>
       <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
