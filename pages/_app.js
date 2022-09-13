import React from 'react';
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import { store } from '../app/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </UserProvider>

  );
}
