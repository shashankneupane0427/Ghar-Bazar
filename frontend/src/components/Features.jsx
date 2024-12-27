import React from 'react'
import {FaListAlt} from 'react-icons/fa'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {IoBookmarkOutline, IoTicketOutline} from 'react-icons/io5'
import {RiFileList3Line} from 'react-icons/ri'

const Features = () => {
  return (
    <section className='max-padd-container py-10 bg-white'>
        {/* CONATINER */}
        <div className='max-padd-container flexBetween flex-wrap gap-8'>
            <div>
                <RiFileList3Line className='text-3xl '/>
                <h4 className='medium-18'>Detailed Listings</h4>
            </div>
            <div>
                <AiOutlineFileSearch className='text-3xl '/>
                <h4 className='medium-18'>Property Search</h4>
            </div>
            <div>
                <IoBookmarkOutline className='text-3xl '/>
                <h4 className='medium-18'>Saved Favorites</h4>
            </div>
            <div>
                <IoTicketOutline className='text-4xl realtive bottom-1 '/>
                <h4 className='medium-18'>Book Visits</h4>
            </div>
        </div>
    </section>
  )
}

export default Features
