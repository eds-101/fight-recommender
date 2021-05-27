const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const fightsData = require("../../data/fights.json")
const FightType = require('./TypeDefs/FightType')

const FindFightQuery = new GraphQLObjectType({
  name: "FindFightQueryType",
  fields: {
    getAFight: {
      type: new GraphQLList(FightType), //double check type, as its one value only
      args: { id: { type: GraphQLInt },
              fighter: { type: GraphQLString } //query for two fields? fighter 1 and 2        
      },
      resolve(parent, args) {
        return (fighterData.filter(fight => fight.id === args.id)) ||
        (
          fighterData.filter(fight => fight.fighter1 == args.fighter || 
          fight.fighter2 == args.fighter)
        )
        //either the id for the fight matches (not implemented) or one of the two fighters#
        //is a match
      }
    }
  }
})

const AddNewFight = new GraphQLObjectType({
  name: "AddNewFight",
  fields: {
    addFighter: {
      type: FighterType,
      args: {
        fight: { type: GraphQLInt},
        event: { type: GraphQLString},
        weight_class: { type: GraphQLString},
        fighter1: { type: GraphQLString},
        fighter2: { type: GraphQLString},
      },
      resolve(parent, args) {
        fightsData.push({id: fightsData.length + 1000, fight: args.fight, event: args.event,
          weight_class: args.weight_class, fighter1: args.fighter1, fighter2: args.fighter2
          })
        return args
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: FindFightQuery, mutation: AddNewFight })
