// components/layout.js

import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div className='page'>
            <Navbar />
            {children}
        </div>
    )
}