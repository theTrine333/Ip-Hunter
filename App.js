import Start from './screens/Start.jsx';
import Hunter from './screens/Hunter.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Hunter" component={Hunter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
