import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface MediumCardProps {
  thumbSource: any;
  element: string;
  text: string;
  ppSource: any;
  label: string;
  author: string;
}

const MediumCard: React.FC<MediumCardProps> = ({
  thumbSource,
  element,
  text,
  ppSource,
  label,
  author,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.top}>
          <Image source={thumbSource} style={styles.thumb} />
          <View style={styles.stamps}>
            <Text style={styles.timestamp}>2 MINUTES AGO</Text>
          </View>
        </View>
        <Text style={styles.element}>{element}</Text>
        <Text style={styles.textWrapper}>{text}</Text>
        <View style={styles.author}>
          <Image source={ppSource} style={styles.pp} />
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    minHeight: 253,
    minWidth: 288,
    width: '100%',
  },
  card: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    left: 0,
    position: 'absolute',
    top: 0,
  },
  top: {
    alignItems: 'center',
    display: 'flex',
    flex: 0,
    gap: 12,
    position: 'relative',
  },
  thumb: {
    height: 45,
    position: 'relative',
    width: 80,
  },
  stamps: {
    alignItems: 'flex-start',
    display: 'flex',
    flex: 0,
    flexDirection: 'column',
    gap: 8,
    position: 'relative',
  },
  timestamp: {
    color: '#a0a5a9',
    fontFamily: 'TRT-Medium',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    lineHeight: 16,
    marginTop: -1,
    position: 'relative',
    width: '100%',
  },
  element: {
    color: '#000000',
    fontFamily: 'Noto Serif-Bold',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 24,
    position: 'relative',
    width: 288,
  },
  textWrapper: {
    color: '#000000',
    fontFamily: 'Noto Serif-Regular',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
    position: 'relative',
    width: 288,
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

export default MediumCard;
