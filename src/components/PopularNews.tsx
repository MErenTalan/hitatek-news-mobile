// src/components/PopularNews.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NewsType} from '../helpers/types';

const PopularNews = ({popularData}: {popularData: NewsType[]}) => {
  return (
    <View>
      <Text style={styles.heading}>POPULAR</Text>
      <View style={styles.newsContainer}>
        {popularData.map((news, index) => (
          <View
            key={news.title}
            style={[
              styles.newsItem,
              {borderBottomWidth: index === popularData.length - 1 ? 0 : 1},
            ]}>
            <Text style={styles.indexText}>{index + 1}</Text>
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{news.title}</Text>
              <Text style={styles.newsAuthor}>{news.author}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 16,
    letterSpacing: 2,
    color: '#000', // Black color
  },
  newsContainer: {
    flexDirection: 'column',
  },
  newsItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#DDDDDD',
  },
  indexText: {
    width: '15%',
    fontSize: 30,
    textAlign: 'center',
    color: '#BFC3C9',
    fontWeight: 'bold',
  },
  newsContent: {
    width: '90%',
    flexDirection: 'column',
  },
  newsTitle: {
    fontSize: 18,
    color: '#333', // Dark gray color
  },
  newsAuthor: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#777', // Light gray color
  },
});

export default PopularNews;
