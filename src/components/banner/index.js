import React from 'react';
import {
 Image,
 View,
 StyleSheet,
 Dimensions,
 Text,
 ImageBackground,
} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Banner = ({message}) => {
 return (
  <ImageBackground
   style={styles.image}
   source={{
    uri: 'https://image.tmdb.org/t/p/w400/p69QzIBbN06aTYqRRiCOY1emNBh.jpg',
   }}>
   <View style={styles.container}>
    <Text style={styles.Text}>{message}</Text>
   </View>
  </ImageBackground>
 );
};

export default Banner;

const styles = StyleSheet.create({
 container: {
  alignItems: 'center',
  backgroundColor: 'black',
  padding: 10,
 },
 image: {
  resizeMode: 'cover',
  width: screenWidth,
  height: screenHeight / 4,
  justifyContent: 'flex-end',
 },
 Text: {
  fontWeight: 'bold',
  color: 'white',
  justifyContent: 'center',
  fontSize: 15,
 },
});
