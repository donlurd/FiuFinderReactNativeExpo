import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
            backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
            backgroundColor: '#25292e',
            },
        }}
        >
      <Tabs.Screen 
        name="index" 
        options={{ 
            title: 'Home',
            tabBarIcon:({color, focused}) =>(
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ) }} />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title:"Camera",
          tabBarIcon:({color, focused})=>(
            <Ionicons 
              name={focused ? 'camera' : 'camera-outline'} 
              color={color}
              size={24}/>
          )
        }}/>
        <Tabs.Screen
        name="camera2"
        options={{
          title:"Camera 2",
          tabBarIcon:({color, focused})=>(
            <Ionicons 
              name={focused ? 'camera-reverse' : 'camera-reverse-outline'} 
              color={color}
              size={24}/>
          )
        }}/>
    </Tabs>
  );
}