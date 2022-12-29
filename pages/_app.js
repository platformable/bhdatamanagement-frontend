import React from 'react';
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import { store } from '../app/store'
import { Provider } from 'react-redux'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider store={store}>
      <Script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_VALIDATION}&libraries=places`}
      />
      <Component {...pageProps} />
      </Provider>
    </UserProvider>

  );
}
