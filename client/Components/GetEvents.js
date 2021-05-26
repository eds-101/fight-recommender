import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client'
import {LOAD_EVENTS} from '../GraphQL/Queries'

const GetEvents = () => {
  const {error, loading, data} = useQuery(LOAD_EVENTS)

  useEffect(()=> {
      console.log(data)
  },  [data]
  )

  return <View></View>

}

export default GetEvents;