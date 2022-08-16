import React from 'react';
import Nav from './Nav';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta keyword="My Blog  powered by Next js" />
                <meta content="My Blog  powered by Next js" />
            </Head>
            <Nav />
            <div>{children}</div>
        </>
    );
};

export default Layout;
