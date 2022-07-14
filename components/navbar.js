import logo from '../public/invert_santa.png'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
    return <nav className='navbar navbar-expand-lg bg-dark'>
        <Image className='navbar-brand' src={logo} width={100} height={100} style={{ borderRadius: '50%', marginLeft: '20px' }}></Image>
            <ul className="ms-auto navbar-nav">
                <li className='nav-item'>
                <Link href="/"><a className='nav-link'>Home</a></Link>
                </li>
                <li className='nav-item'>
                <Link href="/about" className='nav-link'><a className='nav-link'>About</a></Link>
                </li>
            </ul>
    </nav>
}
export default Navbar;