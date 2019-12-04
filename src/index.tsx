import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'

import App from './components/App'
import awsconfig from './aws-exports'

import '@material/react-button/dist/button.min.css'
import '@material/react-text-field/dist/text-field.min.css'

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsconfig.aws_appsync_apiKey
  }
})

const WithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

const mountNode = document.getElementById('root')

const init = async () => {
  await client.hydrated()

  render(<WithProvider />, mountNode)
}

init()
