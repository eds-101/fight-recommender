const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

const FightType = new GraphQLObjectType({
  name: "FightQueryType",
  fields: () => ({
    fight: { type: GraphQLInt},
    event: { type: GraphQLString},
    weight_class: { type: GraphQLString},
    fighter1: { type: GraphQLString},
    fighter2: { type: GraphQLString},
  })
})

module.exports = FightType;