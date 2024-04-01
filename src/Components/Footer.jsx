import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import { faVideo } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <>
    <div className="container ">
        <div className="row mt-5">
          <div className="col-md-3 col-sm-6">
          <FontAwesomeIcon icon={faVideo}  style={{color:'orange',fontSize:'35px' ,marginRight:'5px'}} />
            <span style={{ fontSize: '30px' }}>Video Player</span>
            <p style={{fontSize:'18px'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam cupiditate blanditiis similique quae.
              ctio.
            </p>
          </div>

          <div className="col-md-3 col-sm-6 ">
            <h4 style={{marginLeft:'95px'}}>Links</h4>
            <ul style={{ listStyle: 'none',marginLeft:'65px' }}>
              <li><Link to={'/'}>Landing Page</Link></li>
              <li><Link to={'/home'}>Home Page</Link></li>
              <li><Link to={'/watchHistory'}>Watch History</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h4 style={{marginLeft:'30px'}}>Guides</h4>
            <ul style={{ listStyle: 'none'}}>
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <form action="" style={{ marginBottom: '20px' }} className='d-flex'>
              <input type="text" placeholder="Enter your Email ID" style={{ marginRight: '10px', width: '200px' }} />
              <button className="btn btn-warning">Subscribe</button>
            </form>
            <div className='d-flex ' style={{fontSize:'30px',color:'white'}}>
            <FontAwesomeIcon icon={faInstagram} className='me-5'/>
            <FontAwesomeIcon icon={faFacebook} className='me-5'/>
            <FontAwesomeIcon icon={faTwitter} className='me-5'/>
            <FontAwesomeIcon icon={faLinkedin} className='me-5'/>          
              </div>
          </div>
        </div>
      </div>

       <span className='d-flex justify-content-center align-items-center mt-5'>Copyright © 2023 Media Player.Built with React.</span>
      </>
    );
  }


export default Footer