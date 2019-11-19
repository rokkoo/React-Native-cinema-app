import React, {useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300'; // add movie path at last string

const Carrusel = ({data, headerTitle}) => {
 const carouselRef = useRef(null);

 const renderItem = ({item, index}, parallaxProps) => {
  return (
   <View style={styles.item}>
    <ParallaxImage
     source={{
      uri: `${IMAGE_URL}${item.poster_path}`,
     }}
     containerStyle={styles.imageContainer}
     style={styles.image}
     parallaxFactor={0.1}
     {...parallaxProps}
    />
   </View>
  );
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>{headerTitle}</Text>
   <Carousel
    style={{backgroundColor: 'yellow'}}
    sliderWidth={screenWidth}
    sliderHeight={screenWidth}
    itemWidth={screenWidth / 3}
    data={data}
    renderItem={renderItem}
    hasParallaxImages={true}
    contentContainerCustomStyle={styles.carousel}
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'flex-start',
 },
 item: {
  width: screenWidth / 2,
  height: screenWidth / 2.5,
 },
 imageContainer: {
  flex: 1,
  marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
  backgroundColor: 'white',
  borderRadius: 1,
 },
 image: {
  ...StyleSheet.absoluteFillObject,
  resizeMode: 'stretch',
 },
 title: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
 },
 carousel: {
  paddingLeft: 0,
 },
});

export default Carrusel;

// <Carousel
//   ref={(c) => { this._carousel = c; }}
//   data={this.state.entries}
//   renderItem={this._renderItem}
//   sliderWidth={sliderWidth}
//   itemWidth={itemWidth}
// />
