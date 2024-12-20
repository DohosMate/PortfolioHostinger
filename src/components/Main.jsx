import React from 'react'
import backgroundpic from "../assets/background.jpg"
import { TypeAnimation } from 'react-type-animation'
import {FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={backgroundpic} />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className='max-w-[900px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='flex sm:text-5xl text-4xl font-bold text-gray-800'>I'm Mate Dohos</h1>

                    <h2 className='flex sm:text-3xl text-200xl pt-4 text-gray-700 md:pl-20'>
                        
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I am a Sw Developer',
                                2000, // wait 2s before replacing "Mice" with "Hamsters"
                                'I am a Sw Tester',
                                2000,
                                'I am Team Leader',
                                2000,
                                'an Electrical Engineer with more than 10+ years',
                                2000

                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[300px] w-full md:pl-20'>
                    <a href='https://www.facebook.com/' target="_blank"><FaFacebookF className='cursor-pointer' size={20}/> </a>
                    <a href='https://www.facebook.com/' target="_blank"><FaInstagram className='cursor-pointer' size={20} /> </a>
                    <a href='https://www.facebook.com/' target="_blank"><FaLinkedinIn className='cursor-pointer' size={20} /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
