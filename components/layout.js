// components/layout.js

import Navbar from './navbar'
import Head from 'next/head'
export default function Layout({ children, title }) {
    return (
        <div className='page'>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}