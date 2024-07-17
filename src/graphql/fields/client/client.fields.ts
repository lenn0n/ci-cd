import {
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from 'graphql';

import { ClientType } from './client.defTypes';
import { retrieveClient, updateClient, clientTypes } from './client.controller';

const Queries =  {
  GetClients: {
    type: new GraphQLList(ClientType),
    args: { client_id: { type: GraphQLInt } },
    resolve: (parent: any, args: clientTypes) => {
      return retrieveClient(args)
    },
  }
}

const Mutations =  {
  UpdateClient: {
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
  Queries,
  Mutations
 }