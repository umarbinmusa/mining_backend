import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(ApolloProvider, { client: client, children: _jsx(App, {}) }));
