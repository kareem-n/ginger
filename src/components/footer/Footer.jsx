import React from 'react'
import { Link } from 'react-router-dom';
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { FaYoutube, FaTwitter } from "react-icons/fa";



function Footer() {
    return (
        <footer className='py-20 bg-black'>
            <div className="container px-6 mx-auto flex-wrap flex items-center justify-between md:gap-x-10 gap-y-5">
                <div className="protest-font mr-10">
                    <h1 className='text-5xl '>
                        <span className='uppercase'>
                            ginger
                        </span>

                        <span className='text-sm ml-1 border p-1 rounded-full'>
                            c
                        </span>
                    </h1>
                    <p className='mt-3 text-gray-300'>
                        Empowering Textual Evolution: Where AI Transforms Words into Solutions.
                    </p>
                </div>
                <div className="flex gap-y-5 justify-between flex-wrap md:flex-nowrap md:gap-x-20">
                    <div className="">
                        <h3 className='text-xl font-bold'>Tools</h3>
                        <ul className='mt-2 flex flex-col gap-y-2'>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Grammar Checker
                                </Link>
                            </li>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Language Detector
                                </Link>
                            </li>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Text to Speech
                                </Link>
                            </li>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Text Summarization
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='text-xl font-bold'>Fast Links</h3>
                        <ul className='mt-2 flex flex-col gap-y-2'>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link className='text-gray-300 hover:text-gray-100'>
                                    Discover
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto">
                        <h2 className='text-xl'>Follow US</h2>
                        <div className="flex gap-x-5 mt-3">
                            <PiFacebookLogoDuotone size={30} />
                            <FaYoutube size={30} />
                            <FaTwitter size={30} />
                        </div>
                    </div>
                </div>






            </div>


        </footer>
    )
}

export default Footer