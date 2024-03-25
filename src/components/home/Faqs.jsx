import React, { useRef } from 'react'

import { FaCaretDown } from "react-icons/fa6";


export default function Faqs() {


    const parent = useRef();


    const handleFaqClick = (e) => {


        Array.from(parent.current.children).map(each => {

            if (each.contains(e.target)) {

                if (each.lastElementChild.classList.contains("max-h-40")) {
                    each.firstElementChild.lastElementChild.style.rotate = '0deg'
                    each.lastElementChild.classList.remove("max-h-40")
                } else {
                    each.firstElementChild.lastElementChild.style.rotate = '180deg'

                    each.lastElementChild.classList.add("max-h-40")

                }

            }
            else {
                each.firstElementChild.lastElementChild.style.rotate = '0deg'

                each.lastElementChild.classList.remove("max-h-40");
            }

        })





    }



    return (
        <div className='container mx-auto px-10 py-20'>
            <div className="flex items-center flex-col gap-y-4">
                <h2 className='protest-font text-2xl md:text-4xl'>
                    Frequently Asked Questions <span className='theme-text-color'>(FAQs)</span>
                </h2>
                <p className='text-gray-300 text-center'>
                    Have a question? You might find the answer below. If not, feel free to contact us for assistance.
                </p>
            </div>

            <div ref={parent} className="flex items-center flex-col gap-y-5 mt-10 ">
                <div className="rounded-xl w-full md:w-1/2 overflow-hidden">

                    <div onClick={handleFaqClick} className="main-bg-color cursor-pointer py-2 px-5 flex items-center justify-between">
                        <h3 className='text-xl'>
                            How does  it work?
                        </h3>
                        <div className="transition-all duration-300">
                            <FaCaretDown size={22} />
                        </div>
                    </div>

                    <div className=" bg-black transition-all duration-300 max-h-0">
                        <p className='p-4 text-gray-300'>
                            Our AI product utilizes machine learning algorithms to analyze large volumes of data, identify patterns, and make predictions or recommendations based on the input data. It learns from experience and improves its performance over time.
                        </p>
                    </div>

                </div>


                <div className="rounded-xl w-full md:w-1/2 overflow-hidden">

                    <div onClick={handleFaqClick} className="main-bg-color cursor-pointer py-2 px-5 flex items-center justify-between">
                        <h3 className='text-xl'>
                            How does  it work?
                        </h3>
                        <div className="transition-all duration-300">
                            <FaCaretDown size={22} />
                        </div>                    </div>

                    <div className=" bg-black transition-all duration-300 max-h-0">
                        <p className='p-4 text-gray-300'>
                            Our AI product utilizes machine learning algorithms to analyze large volumes of data, identify patterns, and make predictions or recommendations based on the input data. It learns from experience and improves its performance over time.
                        </p>
                    </div>

                </div>
                <div className="rounded-xl w-full md:w-1/2 overflow-hidden">

                    <div onClick={handleFaqClick} className="main-bg-color cursor-pointer py-2 px-5 flex items-center justify-between">
                        <h3 className='text-xl'>
                            How does  it work?
                        </h3>
                        <div className="transition-all duration-300">
                            <FaCaretDown size={22} />
                        </div>
                    </div>

                    <div className=" bg-black transition-all duration-300 max-h-0">
                        <p className='p-4 text-gray-300'>
                            Our AI product utilizes machine learning algorithms to analyze large volumes of data, identify patterns, and make predictions or recommendations based on the input data. It learns from experience and improves its performance over time.
                        </p>
                    </div>

                </div>


                <div className="rounded-xl w-full md:w-1/2 overflow-hidden">

                    <div onClick={handleFaqClick} className="main-bg-color cursor-pointer py-2 px-5 flex items-center justify-between">
                        <h3 className='text-xl'>
                            How does  it work?
                        </h3>
                        <div className="transition-all duration-300">
                            <FaCaretDown size={22} />
                        </div>                    </div>

                    <div className=" bg-black transition-all duration-300 max-h-0">
                        <p className='p-4 text-gray-300'>
                            Our AI product utilizes machine learning algorithms to analyze large volumes of data, identify patterns, and make predictions or recommendations based on the input data. It learns from experience and improves its performance over time.
                        </p>
                    </div>

                </div>



                <div className="rounded-xl w-full md:w-1/2 overflow-hidden">

                    <div onClick={handleFaqClick} className="main-bg-color cursor-pointer py-2 px-5 flex items-center justify-between">
                        <h3 className='text-xl'>
                            How does  it work?
                        </h3>
                        <div className="transition-all duration-300">
                            <FaCaretDown size={22} />
                        </div>                    </div>

                    <div className=" bg-black transition-all duration-300 max-h-0">
                        <p className='p-4 text-gray-300'>
                            Our AI product utilizes machine learning algorithms to analyze large volumes of data, identify patterns, and make predictions or recommendations based on the input data. It learns from experience and improves its performance over time.
                        </p>
                    </div>

                </div>





            </div>



        </div>
    )
}
