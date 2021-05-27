import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client'
import {LOAD_FUN_FIGHTERS} from '../GraphQL/Queries'

function GetFunFighters() {
  const {error, loading, data} = useQuery(LOAD_FUN_FIGHTERS)
  const [funFighters, setfunFighters] = useState([])

  useEffect(()=> {
    if (data) {
      console.log(data)
      setfunFighters(data.FunFighters)
    }
  },  [data]
  )

  return (
    funFighters.map(
      fighter =>
      <View>
        <Image
          style={{width: 100, height: 100}} 
          source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
        }}
        />
        <Text>{fighter.name}</Text>
        <Text>Fights: {fighter.fight_count}</Text>
        <Text>Wins: {fighter.wins}</Text>
        <Text>Knockout Wins: {fighter.ko_wins}</Text>
        <Text>Submissions: {fighter.sub_wins}</Text>
      </View>
    )
    )
}

export default GetFunFighters;
