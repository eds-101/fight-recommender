const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

const EventType = new GraphQLObjectType({
  name: "EventQueryType",
  fields: () => ({
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    date: { type: GraphQLString},
    location: { type: GraphQLString},
    venue: { type: GraphQLString},
    wiki_link: { type: GraphQLString},
  })
})

module.exports = EventType;