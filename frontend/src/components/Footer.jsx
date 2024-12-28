import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <div className='max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-gradient-to-r from-primary via-white to-white '>
        <div>
          <h4 className='h4'>We are always here to help</h4>
          <p>Find your dream property with ease. © Ghar Bazar, All Rights Reserved.</p>
        </div>
        <div className='flexStart flex-wrap gap-8'>
          <div className='flexCenter gap-x-6'>
            <FaLocationDot/>
            <div>
              <h5 className='h5'>Location</h5>
                <p>123, Avenue, Cl</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaPhone/>
            <div>
              <h5 className='h5'>Phone</h5>
                <p>+0123456789</p>
            </div>
          </div>
          <div className='flexCenter gap-x-6'>
            <FaMailBulk/>
            <div>
              <h5 className='h5'>Email Support</h5>
                <p>info@gharbazar.com</p>
            </div>
          </div>
        </div>
      </div>

      

    </footer>
  )
}

export default Footer
