const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = graphql;

const FighterType = new GraphQLObjectType({
  name: "FighterQueryType",
  fields: () => ({
    id: { type: GraphQLInt},
    name: { type: GraphQLString},
    wiki_link: { type: GraphQLString},
    is_champion: { type: GraphQLBoolean},
    img_url: { type: GraphQLString},
    fight_count: { type: GraphQLInt},
    wins: { type: GraphQLInt},
    draws: { type: GraphQLInt},
    losses: { type: GraphQLInt},
    ko_wins: { type: GraphQLInt},
    ko_losses: { type: GraphQLInt},
    sub_wins: { type: GraphQLInt},
    sub_losses: { type: GraphQLInt},
    decision_wins: { type: GraphQLInt},
    decision_losses: { type: GraphQLInt},
  })
})

module.exports = EventType;