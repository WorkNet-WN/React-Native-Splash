import React, { useState, useEffect } from 'react';
import { Text, View,StatusBar } from 'react-native';
import SplashScreen from './SplashScreen';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Adjust the time according to your preference
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FF5733" />
      {showSplash ? <SplashScreen /> : null}      
      {/* sutabul for initial load or first load */}

{/*
{showSplash ? <SplashScreen /> : <componentNew/>}      
Flow Explained -->from one component to splash and ComponentNew (Submit-->splash[5s])--> Newcomponent */}

      <Text>NIKHIL ..</Text>
    </View>
  );
};

export default App;
