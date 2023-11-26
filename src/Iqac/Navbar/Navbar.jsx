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
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                    <div className="container">
                        <Link className='logo me-auto'><img src={logo} alt="logo" /></Link>
                        {/* <Link className="navbar-brand" to="#!"><span style={{color: "#5e9693"}}>Psycho</span><span style={{color: "#fff"}}>logist</span></Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="https://sethu.ac.in/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navActive" to="https://sethu.ac.in/best-engineering-colleges-in-madurai/">College</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="https://sethu.ac.in/best-engineering-academy-in-madurai/">Academics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="https://sethu.ac.in/best-engineering-courses-in-madurai/">Department</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="https://sethu.ac.in/best-placement-engineering-colleges-in-madurai/">Placement</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="https://sethu.ac.in/research/">Research</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav d-flex flex-row">
                                <li className="nav-item me-3 me-lg-0">
                                    <Link className="nav-link" to="https://www.facebook.com/sethuinstitute/" target='_blank'>
                                    <i className="fa fa-facebook"></i>
                                    </Link>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <Link className="nav-link" to="https://www.instagram.com/sethuinstitute/" target='_blank'>
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <Link className="nav-link" to="https://www.youtube.com/user/sethumedia" target='_blank'>
                                        <i className="fa fa-youtube-play"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

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

