import { gql } from "@apollo/client";

export const LOAD_FUN_FIGHTERS = gql`
  query{
    FunFighters {
      name
      fight_count
      wins
      ko_wins
      sub_wins
      img_url
    }
  }
`

export const LOAD_EVENTS = gql`
  query{
    getAllEvents {
      name
      date
      venue
      id
    }
  }
`
