import React from 'react';
import './navbar.css';

const NavBar = () => {
    const links = [
        { label: 'Apply for Workshop', url: 'https://forms.gle/Jwjdy78EDirj9Eit9' },
        { label: 'Submit Abstract', url: 'https://forms.gle/hDLh8MKkkY8Sz6Ht9' },
        { label: 'Important Dates', url: 'https://drive.google.com/drive/folders/1nJPbC3lKK5bu-oFBOUnBcpXP_Jnxl6_w?usp=sharing' },
        { label: 'Important Information', url: 'https://drive.google.com/drive/folders/1YuuX31iKzKQjxwkAmL3UVkWnrOpLSOKO?usp=sharing' },
    ];

    return (
        <div className="nav-bar">
            {links.map((link, index) => (
                <button
                    key={index}
                    onClick={() => window.open(link.url, '_blank')}
                    className="link-button"
                >
                    {link.label}
                </button>
            ))}
        </div>
    );
};

export default NavBar;