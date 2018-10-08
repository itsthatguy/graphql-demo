const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const app = express();

const schema = `
type Hamburger {
  burger: String
  bun: String
  onions: String
  lettuce: String
  cheese: String
}

type Query {
  orderHamburger(cheese: String, type: String): Hamburger
}
`;

const BURGERS = require('./burgers.json');

const resolvers = {
  Query: {
    orderHamburger: (root, params, request) => {
      const burgerRecipe = BURGERS[params.type || 'american'];

      return Object.assign(burgerRecipe, params.cheese && { cheese: params.cheese });
    },
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs: [schema],
  resolvers: resolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);

app.listen(4000);
