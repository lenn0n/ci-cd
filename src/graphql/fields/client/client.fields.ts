import {
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql';

import { ClientType } from './client.defTypes';
import { retrieveClient, updateClient, clientTypes } from './client.controller';

const ClientQueries =  {
  clients: {
    type: new GraphQLList(ClientType),
    args: { client_id: { type: GraphQLInt } },
    resolve: async (parent: any, args: clientTypes) => {
     return await retrieveClient(args)
    },
  }
}

const ClientMutations =  {
  clients: {
    type: ClientType,
    args: {
      client_id: { type: GraphQLInt },
      client_name: { type: GraphQLString },
    },
    resolve: async(parent: any, args: clientTypes) => {
      await updateClient(args)
      return args
    },
  }
}

export { 
  ClientQueries,
  ClientMutations
 }