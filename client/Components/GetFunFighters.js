import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client'
import {LOAD_FUN_FIGHTERS} from '../GraphQL/Queries'

function GetFunFighters() {
  const {error, loading, data} = useQuery(LOAD_FUN_FIGHTERS)
  const [events, setEvents] = useState([])

  useEffect(()=> {
    if (data) {
      console.log(data)
    }
  },  [data]
  )

  return (
        <View>
        </View>
    )
}

export default GetFunFighters;
