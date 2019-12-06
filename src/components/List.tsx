import gql from 'graphql-tag'
import * as React from 'react'
import { graphql } from 'react-apollo'

import { listTodos } from '../graphql/queries'

const ListTodos = ({ data: { items } }) => (
  <div>
    <pre>{JSON.stringify(items, null, 2)}</pre>
  </div>
)

export default graphql(
  gql`
    ${listTodos}
  `,
  {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: ({ data: { listTodos } }) => ({
      data: listTodos || []
    })
  }
)(ListTodos)
