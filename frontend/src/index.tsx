import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfigProvider } from 'antd-mobile';
import './styles/index.css';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

// モックサーバ設定
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </ApolloProvider>
  </React.StrictMode>
);
