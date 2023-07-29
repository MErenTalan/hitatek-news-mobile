// src/components/NewsCard.js
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const NewsCard = ({title, description, imageUrl}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    paddingVertical: 12,
  },
  image: {
    width: '100%',
    height: 100,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
  },
});

export default NewsCard;
