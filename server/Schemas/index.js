const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const eventData = require("../../data/events.json")
const EventType = require('./TypeDefs/EventType')

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

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
