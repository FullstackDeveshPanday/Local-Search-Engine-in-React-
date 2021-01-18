import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand text-white" href="#">Mobile world</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        </div>
            </nav>
        </div>
)}

export default Navbar;
