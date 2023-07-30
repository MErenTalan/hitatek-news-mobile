// src/screens/HomeScreen.js
import React, {useEffect, useMemo} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import axios from 'axios';
import {useQuery} from 'react-query';
import {useNews} from '../helpers/api';
import PopularNews from '../components/PopularNews';

const HomeScreen = () => {
  const {data, isLoading, error} = useNews();

  const popularData = useMemo(() => {
    if (data) {
      return data.slice(0, 5);
    }
  }, [data]);

  // Render methodları farklı olduğu için yine web tarafında yaptığımız gibi verinin ilk 4 elemanını 3 parçaya bölüyoruz.
  // Büyük giriş kartı için ilk eleman
  const firstSectionData = useMemo(() => {
    if (data) {
      return data[0];
    }
  }, [data]);
  // Altındaki iki orta boyutlu kart için ikinci ve üçüncü eleman
  const secondSectionData = useMemo(() => {
    if (data) {
      return data.slice(1, 3);
    }
  }, [data]);
  // Popular Section'ın altındaki siyah arkaplanlı kart için dördüncü eleman
  const thirdSectionData = useMemo(() => {
    if (data) {
      return data[3];
    }
  }, [data]);

  const fourthSectionData = useMemo(() => {
    if (data) {
      return data.slice(4);
    }
  }, [data]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.toString()}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.headerText}>OPINION</Text>
      </View>
      <View style={styles.newsFeed}>
        <NewsCard
          cardType="big"
          author={firstSectionData.author}
          label={firstSectionData.title}
          thumbSource={{uri: firstSectionData.urlToImage}}
          ppSource={require('../images/avatar.jpg')}
          bgSource={{uri: firstSectionData.urlToImage}}
          text={firstSectionData.description}
        />
        <FlatList
          data={secondSectionData}
          scrollEnabled={false}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <NewsCard
              cardType="medium"
              author={item.author}
              label={item.title}
              thumbSource={{uri: item.urlToImage}}
              ppSource={require('../images/avatar.jpg')}
              bgSource={{uri: item.urlToImage}}
              text={item.description}
            />
          )}
        />
        <PopularNews popularData={popularData} />

        <NewsCard
          cardType="blackBackground"
          author={thirdSectionData.author}
          label={thirdSectionData.title}
          thumbSource={{uri: thirdSectionData.urlToImage}}
          ppSource={require('../images/avatar.jpg')}
          bgSource={{uri: thirdSectionData.urlToImage}}
          text={thirdSectionData.description}
        />
        {data && (
          <FlatList
            data={fourthSectionData}
            scrollEnabled={false}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <NewsCard
                cardType="small"
                author={item.author}
                label={item.title}
                thumbSource={{uri: item.urlToImage}}
                ppSource={require('../images/avatar.jpg')}
                bgSource={{uri: item.urlToImage}}
                text={item.description}
              />
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  newsFeed: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 80,
    left: 40,
  },
  headerText: {
    fontSize: 16,
    letterSpacing: 2,
    lineHeight: 24,
    fontWeight: '700',
    color: '#005D99',
  },
});

export default HomeScreen;
