import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Play Existing',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="play" color={color} />,
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: 'Record and Play',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="play-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}