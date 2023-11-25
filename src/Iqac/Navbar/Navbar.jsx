import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo2.png'


const Navbar = () => {
    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" >
                {/* <div className="col-12"></div> */}
                <div>
                    <nav className="navbar navbar-expand-lg py-4">
                        <div className="container">
                            <Link to={"https://sethu.ac.in/"} className="logo navbar-brand"><img src={logo} alt="logo" className='image-fluid' /></Link>
                            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item mx-2 navActive text-decoration-none">
                                        <Link to={'https://sethu.ac.in/'} className="nav-link" >Home</Link>
                                    </li>
                                    <li className="nav-item mx-2 navActive">
                                        <Link to={'https://sethu.ac.in/best-engineering-colleges-in-madurai/'} className="nav-link" >College</Link>
                                    </li>
                                    <li className="nav-item mx-2 navActive">
                                        <Link to={'https://sethu.ac.in/best-engineering-academy-in-madurai/'} className="nav-link" >Academics</Link>
                                    </li>
                                    <li className="nav-item mx-2 navActive">
                                        <Link to={'https://sethu.ac.in/best-engineering-courses-in-madurai/'} className="nav-link" >Department</Link>
                                    </li>
                                    <li className="nav-item mx-2 navActive">
                                        <Link to={'https://sethu.ac.in/best-placement-engineering-colleges-in-madurai/'} className="nav-link" >Placement</Link>
                                    </li>
                                    <li className="nav-item mx-2 navActive">
                                        <Link to={'https://sethu.ac.in/research/'} className="nav-link" >Research</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </header>
            <div className='container d-flex justify-content-center banner-end'>
                    <div className='text-center'>
                    <h3>IQAC</h3>
                    <p>Home {">"} IQAC</p>
                    </div>
                </div>
            {/* <!-- End Header --> */}
        </>
    )
}

export default Navbar

