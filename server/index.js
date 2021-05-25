const express = require("express");
const app = express();
const PORT = 2021;

const { graphqlHTTP } = require("express-graphql")
const schema = require("./Schemas/index")

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
