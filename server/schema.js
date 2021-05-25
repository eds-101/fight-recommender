const { gql } = require('apollo-server')

const typeDefs = gql`
  type Fighter {
    id: ID! #tba
    fight_count: Int!
    wins: Int!
    draws: Int!
    losses: Int!
    ko_wins: Int!
    ko_losses: Int!
    sub_wins: Int!
    sub_losses: Int!
    decision_wins: Int!
    decision_losses: Int!
    img_url: String
    is_champion: Boolean #tba
    wiki_link: String
  }

  type Event {
    id: ID! #tba
    name: String #tba
    date: String
    location: String
    venue: String
    wiki_link: String
  }

  type UpcomingFight {
    event: Event ######### tbc
    fighters: [Fighter]!
    # fighter1: Fighter 
    # fighter2: Fighter 
    weight_class: String
  }

`