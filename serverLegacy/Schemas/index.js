const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
} = graphql;

const eventData = require("../../data/events.json")
const EventType = require('./TypeDefs/EventType')
const fighterData = require("../../data/fighters.json")
const FighterType = require('./TypeDefs/FighterType')

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllEvents: {
      type: new GraphQLList(EventType),
      args: { id: { type: GraphQLInt }},
      resolve(parent, args) {
        return eventData // see all data in project
      }
    }
  }
})

const FindFighterQuery = new GraphQLObjectType({
  name: "FindFighterQueryType",
  fields: {
    FunFighters: {
      type: new GraphQLList(FighterType),
      args: { kos: { type: GraphQLInt },
              subs:{ type: GraphQLInt },
    },
      resolve(parent, args) {
        if (args.kos) {
          return fighterData.filter(fighter => fighter.ko_wins > args.kos)
          }
        else if(args.subs) {
          return fighterData.filter(fighter => fighter.sub_wins > args.subs)
        }
        else {
          return fighterData.filter(fighter => (fighter.ko_wins > 10 || fighter.sub_wins > 6))
        }
    }
  }}
})

// const FindFighterQuery = new GraphQLObjectType({
//   name: "FindFighterQueryType",
//   fields: {
//     getAFighter: {
//       type: new GraphQLList(FighterType),
//       args: { id: { type: GraphQLInt },
//               name: {type: GraphQLString},
//     },
//       resolve(parent, args) {
//         if (args.id) {
//           return fighterData.filter(fighter => fighter.id == args.id) }
//         else if (args.name) {
//           return fighterData.filter(fighter => fighter.name == args.name) }
//         }
//       }
//     }
// })

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createEvent: {
      type: EventType,
      args: {
        name: { type: GraphQLString},
        date: { type: GraphQLString},
        location: { type: GraphQLString},
        venue: { type: GraphQLString},
        wiki_link: { type: GraphQLString},
      },
      resolve(parent, args) {
        userData.push({id: eventData.length + 1, name: args.name, date: args.date, location: args.location, venue: args.venue, wiki_link: args.wiki_link })
        return args
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: FindFighterQuery, mutation: Mutation })
