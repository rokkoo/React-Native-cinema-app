import React, {useState, useEffect} from 'react';
import {
 SafeAreaView,
 StyleSheet,
 ScrollView,
 View,
 Text,
 StatusBar,
 Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Components
import Carrusel from './src/components/carrusel';
import Banner from './src/components/banner';

// Hooks
import useMovies from './src/hooks/useMovies';

const {height, width} = Dimensions.get('window');

const App = () => {
 const {movies, page2} = useMovies();

 return (
  <SafeAreaView>
   <Banner message="Watch now" />
   <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}>
    <View style={{marginTop: 20}}>
     {movies.length > 0 && <Carrusel data={movies} headerTitle="My list" />}
     {movies.length > 0 && (
      <Carrusel data={page2} headerTitle="Tops pick for you" />
     )}
    </View>
   </ScrollView>
  </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 scrollView: {
  backgroundColor: '#303841',
  height: height,
  fontWeight: '700',
  color: 'red',
  fontSize: 34,
 },
 engine: {
  position: 'absolute',
  right: 0,
 },
 body: {
  backgroundColor: Colors.white,
 },
 sectionContainer: {
  marginTop: 32,
  paddingHorizontal: 24,
 },
 sectionTitle: {
  fontSize: 24,
  fontWeight: '600',
  color: Colors.black,
 },
 sectionDescription: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
  color: Colors.dark,
 },
 highlight: {
  fontWeight: '700',
 },
 footer: {
  color: Colors.dark,
  fontSize: 12,
  fontWeight: '600',
  padding: 4,
  paddingRight: 12,
  textAlign: 'right',
 },
 title: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 24,
 },
});

export default App;
