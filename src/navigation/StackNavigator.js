import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/Home';
import DetailsScreen from '../pages/details/DetailsScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Overview title' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;