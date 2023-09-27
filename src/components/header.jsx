// import required packages
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// export Header component
export default function Header() {
    // get location from useLocation hook
    const currentLocation = useLocation().pathname;

    // return the header component
    return (
        <header className='px-3 py-2 bg-dark text-white'>
            <h1>
                <Link to='/' className='text-decoration-none text-white'>
                    Matthew Schneble
                </Link>
            </h1>
            <nav className="navbar">
                <li className="nav-items">
                    <Link to='/' className={`nav-link ${currentLocation === '/' ? 'active' : ''}`}>
                        About Me
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to='/portfolio' className={`nav-link ${currentLocation === '/portfolio' ? 'active' : ''}`}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to='/contact' className={`nav-link ${currentLocation === '/contact' ? 'active' : ''}`}>
                        Contact
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to='/resume' className={`nav-link ${currentLocation === '/resume' ? 'active' : ''}`}>
                        Resume
                    </Link>
                </li>
            </nav>
        </header>
    );
}