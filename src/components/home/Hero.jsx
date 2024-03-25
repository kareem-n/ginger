import asset from './hero-asset.svg';
import asset_2 from './ai.png';


function Hero() {
    return (
        <div className='min-h-screen hero relative flex items-center '>
            <div className="z-10 w-full md:w-1/2 px-0 md:px-20 text-center relative ">
                <img src={asset} style={{
                    width: '700px'
                }} className='hidden md:block absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' alt="" />

                <h2 className="headTitle text-3xl md:text-5xl relative">
                    AI-powered tools<br />
                    Text Analysis

                </h2>

                <div className="mt-8 flex justify-center gap-x-4 relative">
                    <button className='main-bg-color main-bg-color-hover text-gray-300 py-3 border theme-border-color rounded-xl px-5 hover:skew-y-3'>
                        Get Premium
                    </button>
                    <button className='theme-main-color text-gray-300 py-3 rounded-xl border border-gray-400 px-5 hover:-skew-y-3'>
                        Try it now !
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Hero