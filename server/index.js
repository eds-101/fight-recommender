const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 5000;

const { graphqlHTTP } = require("express-graphql")
const schema = require("./Schemas/index")

app.use(cors())

app.use(("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  })
));

app.listen(PORT, () => {
  console.log("Server running");
});



// import all
//// typedefs(Schema)
//// index (Query, mutation index)

//Server
// with typeDefs, resolvers

//connect with server