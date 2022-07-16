import '../styles/globals.css';
import React from 'react';
import {AppProps} from "next/app";

const MyApp = ({ Component, pageProps: { session, ...pageProps }}: AppProps) => {
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;