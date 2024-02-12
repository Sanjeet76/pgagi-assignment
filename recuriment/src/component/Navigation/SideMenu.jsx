// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleToggleMenu}
            >
                <span className="absolute -inset-0.5" />
                {menuOpen ? (
                    <MenuOpenIcon className="block h-6 w-6" />
                ) : (
                    <MenuIcon className="block h-6 w-6" />
                )}
            </button>
            <div className={`h-screen sidebar bg-white p-4 shadow-lg absolute shadow-indigo-500/40 desktop:w-1/6 ${menuOpen ? 'block' : 'hidden'}`} id='sidebar'>
                <div className='text-xl text-center'>
                    <span className='p-10 m-8 portrait:m-0 '><Link to="/">Menu</Link></span>
                    <hr style={{ width: "100%", height: "3px", backgroundColor: "#00e5ff" }} />
                </div>
                <div className={`desktop:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <ul className='p-1 ml-6 mt-4 cursor-pointer text-nowrap'>
                        <li className='p-2' onClick={handleCloseMenu}>
                            <span className='m-2'><Link to="/companies">Home</Link></span>
                        </li>
                        <li className='p-2' onClick={handleCloseMenu}>
                            <span className='m-2'><Link to="/profile">Profile</Link></span>
                        </li>
                        <li className='p-2' onClick={handleCloseMenu}>
                            <span className='m-2'><Link to="/login">Login</Link></span>
                        </li>
                        <li className='p-2' onClick={handleCloseMenu}>
                            <span className='m-2'><Link to="/chat">Chat</Link></span>
                        </li>
                        <li className='p-2' onClick={handleCloseMenu}>
                            <span className='m-2'><Link to="/workflow">Work Flow</Link></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
