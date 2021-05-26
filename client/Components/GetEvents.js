import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client'
import {LOAD_EVENTS} from '../GraphQL/Queries'

function GetEvents() {
  const {error, loading, data} = useQuery(LOAD_EVENTS)
  const [events, setEvents] = useState([])

  useEffect(()=> {
    if (data) {
      setEvents(data.getAllEvents)
    }
  },  [data]
  )

  return (
    events.map(
      event => 
        <View key={event.id}>
        <Text> {event.name} </Text>
        </View>
  )
  )
}

export default GetEvents;