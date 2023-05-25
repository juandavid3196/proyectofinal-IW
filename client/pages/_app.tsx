import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

const App = ({ Component, pageProps : { session, ...pageProps } }: AppProps) => {
  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  });
  
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
    );
};

export default App