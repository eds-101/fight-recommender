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
      setfunFighters(data.FindFunFighter)
    }
  },  [data]
  )

  return (
    funFighters.map(
      fighter =>
      <View style={styles.container} key={fighter.id}>
        <Image
          style={{width: 120, height: 120}} 
          source={{
          uri: `${fighter.img_url}`
        }}
        />
        <View style={{alignItems: 'left', justifyContent: 'center', marginLeft: 10}}>
          <Text style={styles.name}>{fighter.name}</Text>
          <Text>
          Fights: <Text style={styles.bold}>{fighter.fight_count}</Text>
          </Text>
          <Text>
          Wins: <Text style={styles.bold}>{fighter.wins}</Text>
          </Text>
          <Text>
          Knockouts: <Text style={styles.bold}>{fighter.ko_wins}</Text>
          </Text>
          <Text>
          Submissions: <Text style={styles.bold}>{fighter.sub_wins}</Text>
          </Text>
        </View>
        
      </View>
    )
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 10,
    },
    name: {
      textTransform: 'uppercase'
    },
    bold: {
      fontWeight: 'bold'
    }
    // text: {
    //   color: 'white',
    //   fontSize: 16,
    //   fontWeight: 'bold',
    // },
  });

export default GetFunFighters;
