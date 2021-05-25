const express = require("express");
const app = express();
const PORT = 2021;

const userData = require("../data/events.json")
const graphql = require("graphql")
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const { graphqlHTTP } = require("express-graphql")

const RootQuery = "query"
const Mutation = "mutation"


const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
