import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import { ClientQueries, ClientMutations } from "@graphql/fields/client/client.fields"

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { 
    ...ClientQueries,
  },
})

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    ...ClientMutations
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});


export {
  schema
}