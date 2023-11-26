import React from 'react'
// import {Link} from 'react-router-dom'
import './Iqac.css'
import Navbar from './Navbar/Navbar'
import banner1 from './Assets/banner-1.webp'
import banner2 from './Assets/NAAC.jpg'
import banner3 from './Assets/banner-2.webp'
import banner4 from './Assets/banner-3.jpg'

const iqac = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="row mb-5 m-2">
          <div className="col-lg-6 mt-5 ml-auto d-lg-none">
            <img src={banner1} alt="Images" class="img-fluid" style={{ borderRadius: "15px" }} />
          </div>
          <div className="col-lg-6 mt-5 ml-auto">
            <div className='text-start mb-4 heading'>
              <h3 className=" headingtext">About</h3>
            </div>
            <p className="text-start">SETHU EDUCATIONAL TRUST established SETHU INSTITUTE OF TECHNOLOGY in the year 1995 at
              Pulloor-626 115, Kariapatti Taluk , Virudhunagar District. Sethu Institute of Technology, the
              brainchild of our Founder &amp; Chairman, Mr. S. Mohamed Jaleel, has been rendering its noble service
              since 1995 catering to the sustained growth of the educationally, industrially and economically
              backward rural areas.
            </p>
            <p>The college started with 180 students in the year 1995 with three UG
              Programmes has recorded a stupendous growth of expanding to the strength of 4800 students with
              16 UG Programmes and 5 Post Graduate Programmes.
              <br />The College which is located on Madurai –
              Tuticorin National Highway (NH 45B), Pulloor, Kariapatti, Virudhunagar District is just 12 KMs away
              from Madurai airport. The campus is spread over a sprawling land of 132 acres providing a tranquil
              and right learning ambience for aspiring students.
            </p>

          </div>
          <div className="col-lg-6 mt-5 ml-auto d-none d-md-block">
            <img src={banner1} alt="Images" class="img-fluid" style={{ borderRadius: "15px" }} />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="row mb-5 m-2">
          {/* <div className="col-lg-1"></div> */}
          <div className="col-lg-4 mt-5 ml-auto">
            <img src={banner2} alt="Images" class="img-fluid " width={1000} height={1000} style={{ borderRadius: "10px" }} />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6 mt-5 ml-auto">
            <div className='text-start mb-4 heading'>
              <h3 className=" headingtext">NAAC</h3>
            </div>
            <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo nesciunt consectetur dignissimos iste adipisci dicta vel ex eos dolores quam in omnis culpa tempore, consequatur nulla minima nam modi?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque id cupiditate quas, non quibusdam repudiandae atque animi ipsam maxime enim, fugit soluta tempora debitis, veritatis in nobis accusamus impedit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque id cupiditate quas, non quibusdam repudiandae atque animi ipsam maxime enim, fugit soluta tempora debitis, veritatis in nobis accusamus impedit.
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="row mb-5 m-2">
          <div className="col-lg-6 ml-auto d-lg-none">
            <img src={banner3} alt="Images" class="img-fluid" style={{ borderRadius: "15px" }} />
          </div>
          <div className="col-lg-6 mt-5 ml-auto">
            <div className='text-start mt-lg-5 mb-4 heading'>
              <h3 className=" headingtext">Vision</h3>
            </div>
            <p className="text-start">To promote excellence in the technical education and scientific research for the benefit of the society
            </p>
          </div>
          <div className="col-lg-6 mt-5 ml-auto d-none d-md-block">
            <img src={banner3} alt="Images" class="img-fluid" style={{ borderRadius: "15px" }} />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="row mb-5 m-2">
        <div className="col-lg-"></div>
          <div className="col-lg-6  mt-5 ml-auto">
            <img src={banner4} alt="Images" class="img-fluid" />
          </div>
          <div className="col-lg-6 mt-5 ml-auto">
            <div className='text-start mb-4 heading mission-heading'>
              <h3 className=" headingtext mission-headingtext">Mission</h3>
            </div>
            <p className="text-start">To provide quality technical education to fulfill the aspiration of the student and to meet the needsof the Industry
            </p>
            <ul>
              <li>To provide holistic learning ambience</li>
              <li>To impart skills leading to employability and entrepreneurship</li>
              <li>To establish effective linkage with Industries</li>
              <li>To promote Research and Development activities</li>
              <li>To offer services for the development of society through Education and Technology</li>
            </ul>

          </div>

        </div>
      </div>
    </>
  )
}

export default iqac