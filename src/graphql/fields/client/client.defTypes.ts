import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';


const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    client_id: { type: GraphQLInt },
    client_name: { type: GraphQLString },
  })
})

export {
  ClientType
}