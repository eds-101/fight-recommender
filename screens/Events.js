import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import { StyleSheet, Text, View } from 'react-native';

import GetEvents from '../client/Components/GetEvents'

const errorLink = onError( ({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

export default function EventsScreen() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <GetEvents />
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
