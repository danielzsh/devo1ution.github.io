import Link from 'next/link'
function Navbar() {
    return <nav className='navbar navbar-expand-lg bg-dark'>
        <img className='navbar-brand' src={'/invert_santa.png'} style={{ borderRadius: '50%', marginLeft: '20px', width: '100px', height: '100px' }}></img>
            <ul className="ms-auto navbar-nav">
                <li className='nav-item'>
                <Link href="/"><a className='nav-link'>Home</a></Link>
                </li>
                <li className='nav-item'>
                <Link href="/about" className='nav-link'><a className='nav-link'>About</a></Link>
                </li>
                <li className='nav-item'>
                    <Link href="/blog" className='nav-link'><a className='nav-link'>Blog</a></Link>
                </li>
            </ul>
    </nav>
}
export default Navbar;