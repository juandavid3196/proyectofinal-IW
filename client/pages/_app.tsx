import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>);
};

export default App