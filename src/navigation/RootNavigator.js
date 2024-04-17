import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none"
        screenOptions={{
          headerShown: false
        }}

      >
        <Stack.Screen name="Stack" component={StackNavigator} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator