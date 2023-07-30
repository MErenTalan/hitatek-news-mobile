import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface BlackBackgroundCardProps {
  bgSource: any;
  element: string;
  ppSource: any;
  label: string;
  author: string;
}

const BlackBackgroundCard: React.FC<BlackBackgroundCardProps> = ({
  bgSource,
  element,
  ppSource,
  label,
  author,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.breaker}>
        <Image source={bgSource} style={styles.bg} />
        <View style={styles.meta}>
          <Text style={styles.element}>{element}</Text>
          <View style={styles.author}>
            <Image source={ppSource} style={styles.pp} />
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    height: 284,
    position: 'relative',
    width: "100%",
  },
  breaker: {
    height: 284,
    left: 0,
    position: 'absolute',
    top: 0,
    width: "100%",
  },
  bg: {
    height: 120,
    left: 0,
    position: 'absolute',
    top: 0,
    width: "100%",
  },
  meta: {
    backgroundColor: '#000000',
    height: 164,
    left: 0,
    position: 'absolute',
    top: 120,
    width: "100%",
  },
  element: {
    color: '#ffffff',
    fontFamily: 'Noto Serif-Bold',
    fontSize: 20,
    fontWeight: '700',
    left: 16,
    letterSpacing: 0,
    lineHeight: 28,
    position: 'absolute',
    top: 19,
    width: 288,
  },
  author: {
    alignItems: 'center',
    display: 'flex',
    gap: 16,
    left: 16,
    position: 'absolute',
    top: 112,
  },
  pp: {
    height: 32,
    objectFit: 'cover',
    position: 'relative',
    width: 32,
  },
  label: {
    color: '#ffffff',
    fontFamily: 'TRT-Bold',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 16,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: '100%',
  },
});

export default BlackBackgroundCard;
