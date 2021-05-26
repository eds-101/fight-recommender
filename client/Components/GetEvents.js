import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client'
import {LOAD_EVENTS} from '../GraphQL/Queries'

function GetEvents() {
  const {error, loading, data} = useQuery(LOAD_EVENTS)
  const [events, setEvents] = useState([])

  useEffect(()=> {
    if (data) {
      const updatedEvents = addDateObject(data.getAllEvents)
      const sortedEvents = dateSorter(updatedEvents)
      setEvents(sortedEvents)
    }
  },  [data]
  )

  const addDateObject = (events) => {
    return events.map((e) => {
      return {
        ...e,
        dateObj: new Date(e.date),
        dateFormat: dateFormatter(new Date(e.date))
      }
    })
  }

  const dateSorter = (events) => {
    return events.sort((a,b) => (a.dateObj > b.dateObj ? 1 : -1))
  }

  const dateFormatter = (date) => {
    let dateString = String(date)
    return dateString.slice(0,15)
  }

  return (
    events.map(
      event => 
        <View key={event.id}>
        <Text> {event.name} </Text>
        <Text> {event.dateFormat} </Text>
        </View>
    )
  )
}

export default GetEvents;