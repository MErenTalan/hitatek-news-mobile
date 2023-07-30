import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface BigCardProps {
  thumbSource: any;
  elementSource: any;
  imgSource: any;
  ppSource: any;
  label: string;
  author: string;
}

const BigCard: React.FC<BigCardProps> = ({
  thumbSource,
  elementSource,
  imgSource,
  ppSource,
  label,
  author,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.main}>
          <Image source={thumbSource} style={styles.thumb} />
          <View style={styles.text}>
            <Image source={elementSource} style={styles.element} />
            <Image source={imgSource} style={styles.img} />
            <View style={styles.author}>
              <Image source={ppSource} style={styles.pp} />
              <Text style={styles.label}>{label}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    minHeight: 628,
    minwidth: "100%",
    width: '100%',
  },
  hero: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    left: 0,
    position: 'absolute',
    top: 0,
  },
  main: {
    alignItems: 'center',
    display: 'flex',
    flex: 0,
    flexDirection: 'column',
    gap: 16,
    position: 'relative',
  },
  thumb: {
    height: 240,
    position: 'relative',
    width: "100%",
  },
  text: {
    alignItems: 'flex-start',
    display: 'flex',
    flex: 0,
    flexDirection: 'column',
    gap: 8,
    position: 'relative',
  },
  element: {
    flex: 0,
    position: 'relative',
    width: 288,
  },
  img: {
    alignSelf: 'stretch',
    flex: 0,
    position: 'relative',
    width: '100%',
  },
  author: {
    alignItems: 'center',
    display: 'flex',
    flex: 0,
    gap: 16,
    position: 'relative',
  },
  pp: {
    height: 32,
    objectFit: 'cover',
    position: 'relative',
    width: 32,
  },
  label: {
    color: '#000000',
    fontFamily: 'TRT-Bold',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 16,
    position: 'relative',
    width: '100%',
  },
});

export default BigCard;
