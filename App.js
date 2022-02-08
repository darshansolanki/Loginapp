import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import TabNavigator from './navigation/TabNavigator';
import { AuthContext } from './api/context';
import authStorage from './api/storage';

export default function App() {

  const [Token, setToken] = useState();


  const restoreToken = async() =>{
    const token = await authStorage.getToken();
    if(!token) return;
    setToken(token);
    
  }



  useEffect(() => {
      restoreToken();
  }, [])

  return (
    <AuthContext.Provider value={{Token, setToken}}>
       
      {
        Token ? <TabNavigator />  : <MainNavigation />
      }
      
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
