import { queryType } from './query'
import { mutationType } from './mutation'
import { bookTypeDefs } from './books'
import { DocumentNode } from 'graphql'

export const typeDefs: DocumentNode[] = [
  queryType,
  mutationType,
  ...bookTypeDefs
]
