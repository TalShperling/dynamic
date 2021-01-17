import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import { resolvers } from "./graphql/resolvers/index";
import { typeDefs } from "./graphql/typeDefs";

/**
 * @constant PORT - the port the app will run on.
 */
const PORT: number = 5000;
const app: Application = express();

/**
 * @param schema - the service schema.
 * @param validationRules - since in federation you can get limitless-depth object there is
 * a configured limitation.
 * @param playground - enable the graphql playground environment.
 */
const server: ApolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers as any,
  introspection: true,
});

app.use("*", cors());
app.use(compression());

server.applyMiddleware({ app });

/**
 * @param {number} port -The port the app would run on.
 * The @constant PORT is defined above.
 */
app.listen({ port: PORT }, (): void => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
