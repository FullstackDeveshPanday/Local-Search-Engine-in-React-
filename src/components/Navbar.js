import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="navbar-brand text-white text-center"><h2>Mobile Duniya</h2></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        </div>
            </nav>
        </div>
)}

export default Navbar;
