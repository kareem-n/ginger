import { useDispatch, useSelector } from 'react-redux'

import { FaRegPaste } from "react-icons/fa6";

import { IoSend } from "react-icons/io5";
import { setDataToReceive, setTextSummarizeLoading, setTextSummarizeText } from '../../redux/slices/APIs';
import { useRef } from 'react';
import { Rings } from 'react-loader-spinner';
import grammar from '../../apis/grammar';
import Output from './Output';



function Grammar() {


  const textArea = useRef();

  const { loading, error } = useSelector(state => state.apis.textSummarize);

  const { dataToSend } = useSelector(state => state.apis.textSummarize);

  const dispatch = useDispatch();


  const handleSendData = () => {


    dispatch(setTextSummarizeLoading(true));

    grammar(dataToSend.text).then((data) => {
      dispatch(setDataToReceive(data));
      dispatch(setTextSummarizeLoading(false));
    })

  }



  const tmp = (element) => {

    if (element.value === '') {
      element.nextElementSibling.classList.remove("hidden");

      element.nextElementSibling.nextElementSibling.style.left = '';
      element.nextElementSibling.nextElementSibling.style.top = ''

      element.nextElementSibling.classList.remove("hidden");

      element.nextElementSibling.nextElementSibling.children[1].classList.remove('hidden');
      element.nextElementSibling.nextElementSibling.classList.replace('p-2', "py-3");
      element.parentNode.lastElementChild.classList.add("hidden")

      return
    }

    element.parentNode.lastElementChild.classList.remove("hidden");


    element.nextElementSibling.classList.add("hidden");

    element.nextElementSibling.nextElementSibling.children[1].classList.add('hidden');
    element.nextElementSibling.nextElementSibling.classList.replace('py-3', "p-2");

    element.nextElementSibling.nextElementSibling.style.left = '95%'
    element.nextElementSibling.nextElementSibling.style.top = '5%'


  }




  const handleChange = (e) => {
    dispatch(setTextSummarizeText(e.target.value))


    tmp(e.target)


  }

  const handleFocus = (e) => {
    e.target.nextElementSibling.classList.add("hidden");
  }

  const handleBlur = (e) => {

    if (e.target.value === '') {
      e.target.nextElementSibling.classList.remove("hidden");
    }

  }


  const { topNavbarHeight } = useSelector(state => state.global);


  return (
    <div
      style={{
        paddingTop: topNavbarHeight + 'px'
      }}
      className='min-h-screen'
    >



      <div className="container mx-auto py-10 px-5 md:px-0">
        <div className="flex">
          <h2 className='text-4xl main-bg-color px-10 py-2 rounded-full protest-font'>Grammar Checker</h2>
        </div>

        <div className="mt-10 flex flex-wrap md:flex-nowrap gap-y-5 md:gap-x-10">
          <div className="w-full md:w-3/5 bg-zinc-700 rounded-xl overflow-hidden">

            <div className="relative">

              <textarea
                ref={textArea}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInput={handleChange}
                rows={12}
                className='w-full relative z-10 bg-transparent block text-gray-200 outline-none p-5 pr-14 pb-10'
              >
              </textarea>

              <span className='absolute top-0 m-5 text-gray-300'>/write text here to summarize.../</span>

              <div
                onClick={async () => {
                  const text = await navigator.clipboard.readText()
                  textArea.current.value = textArea.current.value + text;
                  tmp(textArea.current);
                }}

                title='paste text' className="absolute transition-all main-bg-color cursor-pointer main-bg-color-hover rounded-lg z-10 top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center py-3" >
                <div className=''>
                  <FaRegPaste size={25} />
                </div>
                <p className='px-10'>
                  paste text
                </p>
              </div>

              <div
                onClick={handleSendData}
                className="hidden p-5 m-5 hover:bg-gray-300 rounded-full hover:bg-opacity-10 absolute bottom-0 z-50 right-0 cursor-pointer">
                <IoSend size={25} />
              </div>
            </div>


          </div>


          <div className="w-full md:w-2/5 ">
            <div className='bg-gray-300 bg-opacity-20 rounded-lg overflow-hidden h-full'>
              <div className="main-bg-color px-5 py-2">
                <h3>Grammar Errors</h3>
              </div>

              <div className="px-5 py-6 relative h-full">
                {
                  loading && <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center z-40">
                    <Rings height={200} width={200} color='#8018e0' />
                  </div>
                }


                <Output textarea={textArea} />

              </div>


            </div>
          </div>


        </div>


      </div>



    </div>
  )
}


export default Grammar