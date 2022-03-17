import { bookMutationResponse } from './bookMutationResponse'
import { bookInputType } from './bookInputType'
import { bookType } from './bookType'
import { DocumentNode } from 'graphql'

export const bookTypeDefs: DocumentNode[] = [
  bookType,
  bookInputType,
  bookMutationResponse
]
