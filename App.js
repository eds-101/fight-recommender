import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const client = new ApolloClient({
  uri: 'https://ufc-wiki-default-rtdb.europe-west1.firebasedatabase.app/',
});

client
  .query({
    query: gql`
      {
        query upcoming_fights {
          fighter1
        }
      }
    `
  })
  .then(result => console.log(result));

export default function App() {
  return (
  <ApolloProvider client={client}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
