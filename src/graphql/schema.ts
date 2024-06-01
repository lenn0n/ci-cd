import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import { Queries, Mutations } from "@graphql/fields/client/client.fields"

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { 
    ...Queries,
  },
})

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    ...Mutations
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});


export {
  schema
}