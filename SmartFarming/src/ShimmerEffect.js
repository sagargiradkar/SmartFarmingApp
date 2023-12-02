import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerEffect = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const shimmerAnimated = new Animated.Value(0);

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.timing(shimmerAnimated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    );

    shimmerAnimation.start();

    return () => {
      // Clean up the animation when the component unmounts
      shimmerAnimation.stop();
    };
  }, [shimmerAnimated]);

  return (
    <View style={styles.container}>
      {/* Shimmer Effect Header */}
      <View style={styles.headerContainer}>
        <ShimmerPlaceholder style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <ShimmerPlaceholder style={styles.headline} />
          <ShimmerPlaceholder style={styles.name} />
          <ShimmerPlaceholder style={styles.headline} />
        </View>
      </View>

      {/* Shimmer Effect Content */}
      <ShimmerPlaceholder style={styles.content} />
    </View>
  );
};

const { width } = Dimensions.get('window');

const ShimmerScreen = () => {
  return (
    <View style={styles.screenContainer}>
      {[...Array(5)].map((_, index) => (
        <ShimmerEffect key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 4,
  },
  headerTextContainer: {
    flex: 1,
  },
  name: {
    borderRadius: 5,
    width: width * 0.78,
    height: 16,
    marginBottom: 4,
  },
  headline: {
    width: width * 0.5,
    height: 15,
    borderRadius: 5,
  },
  content: {
    borderRadius: 5,
    marginTop: 15,
    height: 100,
    width: 350,
    marginBottom: 20,
  },
});

export default ShimmerScreen;
