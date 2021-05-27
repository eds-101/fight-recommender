const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const fighterData = require("../../data/fighters.json")
const FighterType = require('./TypeDefs/FighterType')

const FindFunFighter = new GraphQLObjectType({
  name: "FindFunFighterQuery",
  fields: {
    FindFunFighter: {
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

const AddFighter = new GraphQLObjectType({
  name: "AddFighter",
  fields: {
    addFighter: {
      type: FighterType,
      args: {
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
      },
      resolve(parent, args) {
        userData.push({id: fighterData.length + 500, name: args.name, wiki_link: args.wiki_link, is_champion: args.is_champion, img_url: args.img_url, fight_count: args.fight_count, 
          wins: args.wins, draws: args.draws, losses: args.losses , ko_wins: args.ko_wins , ko_losses: args.ko_losses, sub_wins: args.sub_wins, sub_losses: args.sub_losses, 
          decision_wins: args.decision_wins, decision_losses: args.decision_losses  })
        return args
      }
    }
  }
})



module.exports = new GraphQLSchema({ query: FindFunFighter, mutation: AddFighter })
