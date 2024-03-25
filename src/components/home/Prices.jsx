
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import shapeStandard from './priceshape1.svg';
import primumeshape from './pricesshape2.svg';
import gold from './gold.svg';
import { Link } from "react-router-dom";

function Prices() {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="theme-text-color text-3xl md:text-5xl font-bold protest-font">Subscriptions <span className="text-gray-300">& prices</span></h2>
          <p className="text-xl mt-5 text-gray-300"> offer a range of flexible plans designed to meet your needs without breaking the bank.</p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-10 mt-10 px-4">


          <div className=" w-full md:w-1/2 lg:w-1/3 bg-zinc-900 rounded-2xl overflow-hidden">
            <div style={{
              height: '200px'
            }} className="flex justify-center py-5 theme-gradient-bg">
              <img src={shapeStandard} className='w-1/2' alt="" />
            </div>

            <div className="p-5">
              <h3 className='text-xl font-bold border-b border-gray-500 pb-3'>Standard Package</h3>

              <ul className='mt-3 text-lg flex flex-col gap-y-2 border-b pb-3 border-gray-500'>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCircleXmark className="mr-2 text-red-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCircleXmark className="mr-2 text-red-500" />
                  Customization Options
                </li>
              </ul>

              <Link className="mt-3 block text-center py-3 border theme-border-color transition-colors rounded-xl main-bg-color main-bg-color-hover">
                Choose plan
              </Link>

            </div>
          </div>
          <div className=" w-full md:w-1/2 lg:w-1/3 bg-zinc-900 rounded-2xl overflow-hidden">
            <div style={{
              height: '200px'
            }} className="flex justify-center py-5 theme-gradient-bg">
              <img src={primumeshape} className='w-1/2' alt="" />
            </div>

            <div className="p-5">
              <h3 className='text-xl font-bold border-b border-gray-500 pb-3'>premium Package</h3>

              <ul className='mt-3 text-lg flex flex-col gap-y-2 border-b pb-3 border-gray-500'>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCircleXmark className="mr-2 text-red-500" />
                  Customization Options
                </li>
              </ul>

              <Link className="mt-3 block text-center py-3 border theme-border-color transition-colors rounded-xl main-bg-color main-bg-color-hover">
                Choose plan
              </Link>

            </div>



          </div>
          <div className=" w-full md:w-1/2 lg:w-1/3 bg-zinc-900 rounded-2xl overflow-hidden">
            <div style={{
              height: '200px'
            }} className="flex justify-center py-5 theme-gradient-bg">
              <img src={gold} className='w-1/2' alt="" />
            </div>

            <div className="p-5">
              <h3 className='text-xl font-bold border-b border-gray-500 pb-3'>Gold Package</h3>

              <ul className='mt-3 text-lg flex flex-col gap-y-2 border-b pb-3 border-gray-500'>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Customization Options
                </li>
              </ul>

              <Link className="mt-3 block text-center py-3 border theme-border-color transition-colors rounded-xl main-bg-color main-bg-color-hover">
                Choose plan
              </Link>

            </div>



          </div>


        </div>


      </div>


    </div>
  )
}

export default Prices