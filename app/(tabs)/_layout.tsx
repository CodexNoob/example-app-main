// File: app/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure this is installed

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ 
          headerShown: false,
          tabBarIcon: () => <Icon name="home" size={20} color="#000" />
        }} 
      />
      
      
      <Tabs.Screen 
        name="Certificate" 
        options={{ 
          headerShown: false,
          tabBarIcon: () => <Icon name="certificate" size={20} color="#000" />
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          headerShown: false,
          tabBarIcon: () => <Icon name="user" size={20} color="#000" />
        }} 
      />

<Tabs.Screen 
        name="Logout" 
        options={{ 
          headerShown: false,
          tabBarIcon: () => <Icon name="bye" size={20} color="#000" />
        }} 
      />

      <Tabs.Screen 
        name="quiz" 
        options={{ 
          title: "Quiz",
          tabBarIcon: () => <Icon name="question-circle" size={20} color="#000" />
        }} 
      />
    </Tabs>
  );
};

export default _layout;
