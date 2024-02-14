import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ScreenTwo from './screens/ScreenTwo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black'
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tarBarLabel: 'My Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Another" component={ScreenTwo}
                options={{
                    tarBarLabel: 'Community',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={24} color="black" />
                    ),
                    tabBarBadge: 3
                }} />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tarBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={24} color="black" />
                    )
                }} />
        </Tab.Navigator>
    );
}
