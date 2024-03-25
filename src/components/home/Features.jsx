import feat1 from './feat1.svg'
function Features() {
    return (
        <div className='features-section relative overflow-hidden container mx-auto rounded-3xl shadow-2xl'>

            <div className="relative py-14 z-10 md:px-20 px-5 flex flex-col md:items-start items-center gap-y-10 ">

                <h1 className='text-gray-400 md:rotate-90 uppercase md:absolute md:-translate-y-1/2 md:top-1/2 md:-right-28 md:text-8xl text-2xl w-full text-center md:w-auto mb-8 md:m-0'>features</h1>

                <div className="flex items-center ">
                    <span className='mr-10 text-5xl protest-font hidden md:block'>1</span>
                    <div className="featureItem-bg border relative theme-border-color border-opacity-0 md:px-5 px-3 rounded-lg">

                        <div className="flex justify-center absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img style={{
                                width: '50px'
                            }} src={feat1} className='featureItem-img-shadow rounded-full main-bg-color p-2' alt="" />
                        </div>


                        <h3 className='md:text-xl text-lg  pt-8'>Precision Grammar Correction</h3>
                        <p className='text-gray-300 mt-3 pb-4'>
                            Utilizing advanced NLP algorithms, the platform offers<br /> accurate corrections for grammar.
                        </p>

                    </div>
                </div>
                <div className="flex items-center ">
                    <span className='mr-10 text-5xl protest-font hidden md:block'>1</span>
                    <div className="featureItem-bg border relative theme-border-color border-opacity-0 md:px-5 px-3 rounded-lg">

                        <div className="flex justify-center absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img style={{
                                width: '50px'
                            }} src={feat1} className='featureItem-img-shadow rounded-full main-bg-color p-2' alt="" />
                        </div>


                        <h3 className='md:text-xl text-lg  pt-8'>Precision Grammar Correction</h3>
                        <p className='text-gray-300 mt-3 pb-4'>
                            Utilizing advanced NLP algorithms, the platform offers<br /> accurate corrections for grammar.
                        </p>

                    </div>
                </div>
                <div className="flex items-center ">
                    <span className='mr-10 text-5xl protest-font hidden md:block'>1</span>
                    <div className="featureItem-bg border relative theme-border-color border-opacity-0 md:px-5 px-3 rounded-lg">

                        <div className="flex justify-center absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <img style={{
                                width: '50px'
                            }} src={feat1} className='featureItem-img-shadow rounded-full main-bg-color p-2' alt="" />
                        </div>


                        <h3 className='md:text-xl text-lg  pt-8'>Precision Grammar Correction</h3>
                        <p className='text-gray-300 mt-3 pb-4'>
                            Utilizing advanced NLP algorithms, the platform offers<br /> accurate corrections for grammar.
                        </p>

                    </div>
                </div>

                

              

            </div>

        </div>
    )
}

export default Features