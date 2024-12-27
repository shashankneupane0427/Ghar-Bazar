import React  from 'react'
import { useState, useEffect } from 'react'
import {LiaCertificateSolid} from "react-icons/lia"
import CountUp from 'react-countup';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false)

  const statistics = [
    {label: 'Happy clients', value: 12},
    {label: 'Different cities', value: 3},
    {label: 'Projects completed', value: 45}
  ]
 

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className='mx-auto max-w-[1440px]'>
      {/* CONTAINER */}
      <div className='flex flex-col xl:flex-row'>
        {/* LEFT SIDE */}
        <div className='flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 py-16 '>
          <h2 className='h2'>Our Achievements</h2>
          <p className='py-5 text-white max-w-[47rem]'>We have facilitated seamless property transactions, earned industry recognition, and built a trusted platform for discovering dream homes and investments.</p>
          {/* STATISTICS CONTAINER */}
          <div className='flex flex-wrap gap-4'>
            {statistics.map((statistics, index)=>(
              <div key={index} className='p-4 rounded-lg'>
                <div className='flex items-center gap-1'>
                  <CountUp start={isVisible ? 0 : null} end={statistics.value} duration={10} deLay={1}>
                      {({countUpRef})=> (
                        <h2 ref={countUpRef} className='text-5xl font-sans' />
                      )}
                  </CountUp>
                  <h4 className='regular-32'>K+</h4>
                </div>
                <p className='text-white capitalize pt-2'>{statistics.label}</p>
              </div>
            ))}
          </div> 
        </div>
        {/* RIGHT SIDE */}
        <div className='flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter'>
          <div className='p-4 rounded -lg flexCenter flex-col xl:-rotate-90'>
            <span className='relative bottom-8 p-3 flex items-center rounded-full'> <LiaCertificateSolid className='text-5xl text-black' /> </span>
            <span className='relative bottom-3'>We have facilitated seamless property transactions, earned industry recognition, and built a trusted platform for discovering dream homes and investments.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
