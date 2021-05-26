import { gql } from "@apollo/client";

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