import asset from './productsasset.jpg'
import asset2 from './produstasset2.svg'

import { FaTextWidth } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { PiDetectiveFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';



function Products() {


    const [isMobile, setIsMobile] = useState(false);

    const { user } = useSelector(state => state.global);

    console.log(user);

    const ringRef = useRef();
    const container = useRef();


    const mouseEnteredHandle = (e) => {

        ringRef.current.classList.replace("-z-10", "z-50");



        ringRef.current.style.top = e.clientY - container.current.getBoundingClientRect().top + 'px';

        ringRef.current.style.left = e.clientX - container.current.getBoundingClientRect().left + 'px';

    }

    const mouseLeaveHandle = () => {


        ringRef.current.style.top = '50%';
        ringRef.current.style.left = '50%';
        ringRef.current.classList.replace("z-50", "-z-10");


    }


    useEffect(() => {


        window.innerWidth < 500 && setIsMobile(true);



    }, [])





    return <>

        <Outlet></Outlet>


        <div

            onMouseMove={!isMobile && !user ? mouseEnteredHandle : undefined}
            onMouseLeave={!isMobile && !user ? mouseLeaveHandle : undefined}
            ref={container}
            className="mt-24 container mx-auto">
            <div className="flex justify-between flex-wrap overflow-hidden py-10 bg-black bg-opacity-25 rounded-2xl relative">


                {
                    user && <div
                        ref={ringRef}
                        style={{
                            top: '-5%',
                            left: '-5%'
                        }} className={`absolute hidden md:block transition-all duration-75 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full ring-neon`}></div>

                }



                <div className="w-full md:w-2/3 p-10">
                    <h2 className='text-4xl protest-font theme-text-color flex items-center'>
                        Meet your copilots
                        <GoCopilot className='ml-4' />
                    </h2>

                    <div className="grid copilots grid-cols-2 gap-5 mt-8 relative z-40">

                        <div
                            onMouseEnter={(e) => {
                                if (user) e.target.classList.add("cursor-pointer");
                            }}
                            className="col-span-2 md:col-span-1 rounded-lg overflow-hidden">
                            <Link to={'/products/text-summarization-tool'} className='flex  px-5 py-4'>
                                <div className="mr-3 pt-1">
                                    <FaTextWidth size={23} className='theme-text-color' />
                                </div>
                                <div className="">
                                    <h4 className='text-xl'>
                                        Text Summarization
                                    </h4>

                                    <p className='text-gray-300 mt-2'>
                                        - Transforming complexity into clarity, Text Summarization AI is the conductor of concise insights.
                                    </p>
                                </div>
                            </Link>


                        </div>
                        <div
                            onMouseEnter={(e) => {
                                if (user) e.target.classList.add("cursor-pointer");
                            }}

                            className="col-span-2 md:col-span-1 rounded-lg overflow-hidden relative z-50">
                            <Link
                                to={'/products/language-detector'}
                                className='flex px-5 py-4 relative'
                            >

                                <div className="pt-1 mr-3">
                                    <PiDetectiveFill className='theme-text-color' size={25} />
                                </div>
                                <div className="">
                                    <h4 className='text-xl'>
                                        Language Detector
                                    </h4>

                                    <p className='mt-3 text-gray-300'>
                                        - Like a polyglot whisperer, the Text Language Detection AI deciphers linguistic nuances in a digital babel of tongues.
                                    </p>

                                </div>
                            </Link>

                        </div>
                        <div
                            onMouseEnter={(e) => {
                                if (user) e.target.classList.add("cursor-pointer");
                            }}
                            className="col-span-2 md:col-span-1  rounded-lg">

                                <Link to={
                                    '/products/grammar-checker'
                                } className='flex px-5 py-4'>
                                <div className="mr-3 pt-1">
                                <FaCheckCircle size={23} className='theme-text-color' />
                            </div>
                            <div className="">
                                <h4 className='text-xl'>
                                    Grammar Checker
                                </h4>

                                <p className='text-gray-300 mt-2'>
                                    - Crafting flawless prose with precision, the Grammar Checker AI polishes every word into literary perfection.
                                </p>
                            </div>
                                </Link>
                            



                        </div>
                        <div
                            onMouseEnter={(e) => {
                                if (user) e.target.classList.add("cursor-pointer");
                            }}
                            className="col-span-2 md:col-span-1 px-5 py-4 rounded-lg flex ">
                            <div className="mr-3 pt-1">
                                <MdOutlineSettingsVoice size={23} className='theme-text-color' />
                            </div>
                            <div className="">
                                <h4 className='text-xl'>
                                    Text to Speech
                                </h4>

                                <p className='text-gray-300 mt-2'>
                                    - Breathing life into words, the Text-to-Speech tool transforms written language into a symphony of spoken expression.
                                </p>
                            </div>



                        </div>

                    </div>

                </div>


                <div className='relative z-40 w-full md:w-1/3 flex items-center overflow-hidden'>
                    <img src={asset} className='w-full scale-150 relative z-40' alt="" />

                    <img src={asset2} className='absolute w-full h-full top-0 scale-125' alt="" />

                </div>
            </div>
        </div>
    </>
}

export default Products