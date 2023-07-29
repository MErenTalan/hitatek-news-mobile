// src/screens/HomeScreen.js
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import axios from 'axios';
import {useQuery} from 'react-query';
import {useNews} from '../helpers/api';

const HomeScreen = () => {
  const {data, isLoading, error} = useNews();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.toString()}</Text>;
  }

  return (
    <View style={styles.container}>
      <Navbar />
        {data &&   <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <NewsCard
            title={item.title}
            description={item.description}
            imageUrl={item.urlToImage}
          />
        )}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default HomeScreen;
