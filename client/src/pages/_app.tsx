import '../styles/globals.css';
import React from 'react';
import { SessionProvider } from "next-auth/react"
import {AppProps} from "next/app";

const MyApp = ({ Component, pageProps: { session, ...pageProps }}: AppProps) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;