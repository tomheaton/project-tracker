import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {SessionProvider} from "next-auth/client";
import React from 'react';

const MyApp = ({Component, pageProps: {session, ...pageProps}}: AppProps) => {
    return (
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;