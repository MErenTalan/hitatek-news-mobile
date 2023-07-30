import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface NewsCardProps {
  cardType: 'big' | 'medium' | 'blackBackground' | 'small';
  thumbSource?: any;
  bgSource?: any;
  ppSource?: any;
  label: string;
  author: string;
  text?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  cardType,
  thumbSource,
  bgSource,
  ppSource,
  label,
  author,
  text: description,
}) => {
  const renderCardType = () => {
    switch (cardType) {
      case 'big':
        return (
          <View style={styles.bigCardContainer}>
            <Image style={styles.thumb} source={thumbSource} />
            <View style={styles.textContainer}>
              <Text style={[styles.bigLabel, styles.labelTextShadow]}>
                {label}
              </Text>
              <Text
                style={[styles.bigDescription, styles.descriptionTextShadow]}>
                {description}
              </Text>
              <View style={styles.authorContainer}>
                <Image style={styles.pp} source={ppSource} />
                <Text style={styles.label}>{author}</Text>
              </View>
            </View>
          </View>
        );
      case 'medium':
        return (
          <View style={styles.mediumCardContainer}>
            <Image style={styles.thumb} source={thumbSource} />
            <Text style={styles.elementLabel}>{label}</Text>
            <Text style={styles.text}>{description}</Text>
            <View style={styles.authorContainer}>
              <Image style={styles.pp} source={ppSource} />
              <Text style={styles.label}>{label}</Text>
            </View>
          </View>
        );
      case 'blackBackground':
        return (
          <View style={styles.blackBackgroundCardContainer}>
            <Image style={styles.bg} source={bgSource} />
            <View style={styles.metaContainer}>
              <Text style={[styles.elementLabel, {color: '#fff'}]}>
                {label}
              </Text>
              <View style={styles.authorContainer}>
                <Image style={styles.pp} source={ppSource} />
                <Text style={[styles.label, {color: '#fff'}]}>{label}</Text>
              </View>
            </View>
          </View>
        );
      case 'small':
        return (
          <View style={styles.smallCardContainer}>
            <View style={styles.topContainer}>
              <Image style={styles.smallThumb} source={thumbSource} />
              <View style={styles.stampsContainer}>
                <Text style={styles.timestamp}>2 MINUTES AGO</Text>
              </View>
            </View>
            <Text style={styles.elementLabel}>{label}</Text>
            <Text style={styles.text}>{description}</Text>
            <View style={styles.authorContainer}>
              <Image style={styles.pp} source={ppSource} />
              <Text style={styles.elementLabel}>{author}</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return <>{renderCardType()}</>;
};

const styles = StyleSheet.create({
  bigCardContainer: {
    marginBottom: 40,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    minHeight: 628,
    borderWidth: 0,
  },
  mediumCardContainer: {
    marginBottom: 40,
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    minHeight: 318,
    borderWidth: 0,
  },
  blackBackgroundCardContainer: {
    marginTop: 40,
    marginBottom: 140,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 284,
    borderWidth: 0,
  },
  smallCardContainer: {
    marginBottom: 40,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    minHeight: 280,
    borderWidth: 0,
  },
  thumb: {
    height: 240,
    width: 320,
    position: 'relative',
  },
  smallThumb: {
    height: 70,
    width: 140,
    position: 'relative',
  },
  textContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  elementLabel: {
    color: '#000000',
    fontFamily: 'Noto Serif-Bold',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0,
    lineHeight: 28,
    position: 'relative',
    width: 288,
  },
  authorContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    position: 'relative',
  },
  pp: {
    height: 32,
    width: 32,
    position: 'relative',
    borderRadius: 999,
  },
  label: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 16,
    position: 'relative',
    width: '100%',
  },
  bigLabel: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 38,
    position: 'relative',
    width: '100%',
  },
  bigDescription: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 24,
  },
  bg: {
    height: 120,
    width: "100%",
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
  },
  metaContainer: {
    backgroundColor: '#000000',
    height: "100%",
    width: '100%',
    padding: 32,
    position: 'absolute',
    top: 120,
    left: 0,
  },
  topContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    flexDirection: 'row',
    gap: 12,
    position: 'relative',
  },
  stampsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
    position: 'relative',
  },
  timestamp: {
    color: '#a0a5a9',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    lineHeight: 16,
    marginTop: -1,
    position: 'relative',
    width: '100%',
  },
  text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
    position: 'relative',
    width: 288,
  },
  labelTextShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  descriptionTextShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 0,
  },
});

export default NewsCard;
