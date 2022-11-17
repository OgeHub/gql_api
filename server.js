require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");

/**Create server */
const server = new ApolloServer({ typeDefs, resolvers });

/**Connect database and listen to server */
mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful");
    return server.listen({ port: process.env.PORT });
  })
  .then((res) => {
    console.log(`Server is running on port: ${res.url}`);
  });
