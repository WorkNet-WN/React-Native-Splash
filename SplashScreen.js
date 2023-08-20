// import React from 'react';
// // import { View, Image, StyleSheet } from 'react-native';
// import { View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';

// const SplashScreen = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Image source={require('./splash_logo.webp')} style={styles.logo} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: 'white',
//   // },

//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   logo: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });

// export default SplashScreen;



import React from 'react';
import { View, Image, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Image source={require('./splash_logo.webp')} style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;

