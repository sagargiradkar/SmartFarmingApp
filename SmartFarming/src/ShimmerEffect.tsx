import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet, Dimensions } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ShimmerEffect = () => {
  // Handle animation
  const avatarRef = useRef();
  const nameRef = useRef();
  const headlineRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const shimmerAnimated = Animated.stagger(
      400,
      [
        Animated.sequence([
          Animated.parallel([
            Animated.timing(avatarRef.current, { toValue: -100, duration: 500, useNativeDriver: false }),
            Animated.timing(nameRef.current, { toValue: -50, duration: 500, useNativeDriver: false }),
            Animated.timing(headlineRef.current, { toValue: -30, duration: 500, useNativeDriver: false }),
          ]),
          Animated.parallel([
            Animated.timing(avatarRef.current, { toValue: 0, duration: 500, useNativeDriver: false }),
            Animated.timing(nameRef.current, { toValue: 0, duration: 500, useNativeDriver: false }),
            Animated.timing(headlineRef.current, { toValue: 0, duration: 500, useNativeDriver: false }),
          ]),
        ]),
        Animated.sequence([
          Animated.parallel([
            Animated.timing(contentRef.current, { toValue: -100, duration: 500, useNativeDriver: false }),
          ]),
          Animated.parallel([
            Animated.timing(contentRef.current, { toValue: 0, duration: 500, useNativeDriver: false }),
          ]),
        ]),
      ],
    );
    Animated.loop(shimmerAnimated).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Shimmer Effect Header */}
      <View style={styles.headerContainer}>
        <ShimmerPlaceholder ref={avatarRef} style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <ShimmerPlaceholder ref={nameRef} style={styles.name} />
          <ShimmerPlaceholder ref={headlineRef} style={styles.headline} />
        </View>
      </View>

      {/* Shimmer Effect Content */}
      <ShimmerPlaceholder ref={contentRef} style={styles.content} />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Add a border to separate posts
    alignItems: 'flex-start', // Align children to the left
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items in a column
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
    width: width * 0.78, // Adjust width based on the screen size
    height: 16,
    marginBottom: 4,
  },
  headline: {
    width: width * 0.5, // Adjust width based on the screen size
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

export default ShimmerEffect;
